import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-healt-records',
  templateUrl: './healt-records.component.html',
  styleUrls: ['./healt-records.component.scss']
})
export class HealtRecordsComponent implements OnInit {

  title = 'Personal Health Record';
  form: FormGroup;
  displayInfo = false;
  submitted = false;
  doctors = [];

  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private doctorService: DoctorService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      healthID: ['', Validators.compose([Validators.required])],
      healthInfo: ['', Validators.compose([Validators.required])],
      healthSummary: ['', Validators.compose([Validators.required])],
      claims: [''],
      medicare: [''],
      age: [''],
      doctor: [''],
      nurse: [''],
    });
    this.form.disable();
    this.getInfos();
  }

  emergemcyContact() {
    this.toastr.info('This is not implemented yet !');
  }

  getInfos() {
    const patientName = localStorage.getItem('username');
    this.doctorService.getInfo(patientName).subscribe((resp: any) => {
      if (resp && resp !== null) {
        this.form.get('healthID').setValue(resp.healthId);
        this.form.get('healthInfo').setValue(resp.healthInfo);
        this.form.get('healthSummary').setValue(resp.healthSummary);
        this.form.get('claims').setValue(resp.claims);
        this.form.get('medicare').setValue(resp.medicare);
        this.form.get('age').setValue(resp.age);
        this.form.get('doctor').setValue(resp.doctor);
        this.form.get('nurse').setValue(resp.nurse);
      }
    }, error => {
      this.toastr.error('Error while pulling doctor informations');
    })
  }

}
