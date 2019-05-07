import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MessagingService } from 'src/app/services/messaging.service';
import { ToastrService } from 'ngx-toastr';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-contact-doctor',
  templateUrl: './contact-doctor.component.html',
  styleUrls: ['./contact-doctor.component.scss']
})
export class ContactDoctorComponent implements OnInit {


  title = 'Information from Doctor';
  form: FormGroup;
  displayInfo = false;
  submitted = false;
  doctors = [];

  constructor(private formBuilder: FormBuilder,
    private messageService: MessagingService,
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
    });
    this.getDoctors();
  }

  emergemcyContact() {
    this.toastr.info('This is not implemented yet !');
  }

  getInfos() {
    const patientName = localStorage.getItem('username');
    this.doctorService.getInfo(patientName).subscribe((resp: any) => {
      this.form.get('healthID').setValue(resp.healthId);
      this.form.get('healthInfo').setValue(resp.healthInfo);
      this.form.get('healthSummary').setValue(resp.healthSummary);
      this.form.get('claims').setValue(resp.claims);
      this.form.get('medicare').setValue(resp.medicare);
      this.form.get('age').setValue(resp.age);
    }, error => {
      this.toastr.error('Error while pulling doctor informations');
    })
  }

  getDoctors() {
    this.doctorService.getDoctors().subscribe((resp: any) => {
      this.doctors = resp;
    }, error => {

    })
  }

  selectDoctor(doctor) {
    this.displayInfo = true;
    this.getInfos();
  }

}
