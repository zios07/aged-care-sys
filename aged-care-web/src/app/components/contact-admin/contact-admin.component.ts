import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MessagingService } from 'src/app/services/messaging.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-admin',
  templateUrl: './contact-admin.component.html',
  styleUrls: ['./contact-admin.component.scss']
})
export class ContactAdminComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  title = 'Contact Admin';
  form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private messageService: MessagingService, private toastr: ToastrService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      sendAddress: ['', Validators.compose([Validators.required, Validators.email])],
      receiverAddress: ['', Validators.compose([Validators.required, Validators.email])],
      message: ['', Validators.compose([Validators.required])]
    });
  }

  sendMessage() {
    this.submitted = true;
    const message = this.populateMessage();

    this.messageService.send(message).subscribe((resp: any) => {
      this.submitted = false;
      this.toastr.info('Message sent successfully');
    });
  }

  populateMessage() {
    return {
      body: this.form.get('message').value,
      sender: {
        email: this.form.get('sendAddress').value
      },
      receiver: {
        email: this.form.get('receiverAddress').value
      }
    }
  }

}
