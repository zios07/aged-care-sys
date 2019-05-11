import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DoctorService } from 'src/app/services/doctor.service';
import { MessagingService } from 'src/app/services/messaging.service';

@Component({
  selector: 'app-contact-doctor',
  templateUrl: './contact-doctor.component.html',
  styleUrls: ['./contact-doctor.component.scss']
})
export class ContactDoctorComponent implements OnInit {


  title = 'Information from Doctor';
  messageFormTitle = 'Contact doctor';
  form: FormGroup;
  contactForm: FormGroup;
  displayInfo = false;
  loading = false;
  showContactForm = false;
  doctors = [];
  username: string;
  selectedDoctor;

  constructor(private formBuilder: FormBuilder,
    private messageService: MessagingService,
    private toastr: ToastrService,
    private doctorService: DoctorService) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
    this.contactForm = this.formBuilder.group({
      message: ['', Validators.compose([Validators.required])]
    });

    this.form = this.formBuilder.group({
      healthID: [''],
      healthInfo: [''],
      healthSummary: [''],
      claims: [''],
      medicare: [''],
      age: [''],
    });
    this.form.disable();
    this.getDoctors();
  }

  emergencyContact() {
    this.showContactForm = true;
  }

  getInfos() {
    const patientName = localStorage.getItem('username');
    this.doctorService.getInfo(patientName).subscribe((resp: any) => {
      // TODO Shoud never be null !!
      if (resp && resp != null) {
        this.form.get('healthID').setValue(resp.healthId);
        this.form.get('healthInfo').setValue(resp.healthInfo);
        this.form.get('healthSummary').setValue(resp.healthSummary);
        this.form.get('claims').setValue(resp.claims);
        this.form.get('medicare').setValue(resp.medicare);
        this.form.get('age').setValue(resp.age);
      }
    }, error => {
      this.toastr.error('Error while pulling doctor informations');
    })
  }

  sendMessage() {
    const message = this.populateMessage();
    this.loading = true;
    this.messageService.send(message).subscribe((resp: any) => {
      this.loading = false;
      this.toastr.info('Message sent successfully');
    }, error => {
      this.loading = false;
      this.toastr.error('Could not send the message, please try again in a moment');
    });
  }

  populateMessage() {
    return {
      body: this.contactForm.get('message').value,
      sender: {
        email: this.username
      },
      receiver: {
        email: this.selectedDoctor.username
      }
    }
  }

  getDoctors() {
    this.doctorService.getDoctors().subscribe((resp: any) => {
      this.doctors = resp;
    }, error => {

    })
  }

  selectDoctor(doctor) {
    this.displayInfo = true;
    this.selectedDoctor = doctor;
    this.getInfos();
  }

}
