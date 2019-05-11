import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { DoctorService } from 'src/app/services/doctor.service';
import { HealthRecordService } from 'src/app/services/health-record.service';

@Component({
  selector: 'app-healt-records',
  templateUrl: './healt-records.component.html',
  styleUrls: ['./healt-records.component.scss']
})
export class HealtRecordsComponent implements OnInit {

  title = 'Health Record Informations';
  form: FormGroup;
  displayInfo = false;
  submitted = false;
  doctors = [];
  sub: Subscription;
  patientId;
  editing = false;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private healthRecordService: HealthRecordService,
    private toastr: ToastrService,
    private doctorService: DoctorService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      healthID: ['', Validators.compose([Validators.required]),],
      healthInfo: ['', Validators.compose([Validators.required])],
      healthSummary: ['', Validators.compose([Validators.required])],
      claims: [''],
      medicare: [''],
      age: [''],
      doctor: [''],
      nurse: [''],
    });
    this.form.disable();

    this.sub = this.route.params.subscribe(params => {
      this.patientId = params['patientID'];
      const helper = new JwtHelperService();
      const token = helper.decodeToken(localStorage.getItem('token'));
      if (this.patientId) {
        if (token.role === 'ADMINISTRATOR' || token.role === 'PATIENT') {
          this.form.enable();
          this.form.controls['healthID'].disable();
          this.editing = true;
        }
      } else {
        if (token.role === 'PATIENT') {
          this.form.enable();
          this.form.controls['healthID'].disable();
          this.editing = true;
          this.patientId = token.userId;
        } else {
          this.editing = false;
        }
      }
      this.getInfos();
    });

  }

  emergemcyContact() {
    this.toastr.info('This is not implemented yet !');
  }

  getInfos() {
    if (this.patientId) {
      this.doctorService.getInfoByPatientID(this.patientId).subscribe((resp: any) => {
        if (resp && resp !== null) {
          this.populateForm(resp);
        }
      }, error => {
        this.toastr.error('Error while pulling doctor informations');
      })
    } else {
      const patientName = localStorage.getItem('username');
      this.doctorService.getInfo(patientName).subscribe((resp: any) => {
        if (resp && resp !== null) {
          this.populateForm(resp);
        }
      }, error => {
        this.toastr.error('Error while pulling health record');
      })
    }
  }

  createHealthRecord() {
    this.submitted = true;
    let hr = this.populateHR();
    this.healthRecordService.createHR(hr, this.patientId).subscribe((resp: any) => {
      if (resp && resp !== null) {
        this.submitted = false;
        this.populateForm(resp);
        this.toastr.info('Health record created for patient : ' + this.patientId);
      }
    }, error => {
      this.submitted = false;
      this.toastr.error('Error while pulling doctor informations');
    });
  }

  populateHR() {
    let hr = this.form.value;
    hr.patient = {};
    hr.patient.id = this.patientId;
    return hr;
  }

  private populateForm(resp: any) {
    this.form.get('healthID').setValue(resp.healthId);
    this.form.get('healthInfo').setValue(resp.healthInfo);
    this.form.get('healthSummary').setValue(resp.healthSummary);
    this.form.get('claims').setValue(resp.claims);
    this.form.get('medicare').setValue(resp.medicare);
    this.form.get('age').setValue(resp.age);
    this.form.get('doctor').setValue(resp.doctor);
    this.form.get('nurse').setValue(resp.nurse);
  }
}
