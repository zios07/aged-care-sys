import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Message } from 'src/app/domain/message';
import { MessagingService } from 'src/app/services/messaging.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  response: Message = new Message();
  messages: Message[] = [];
  responding: boolean = false;
  selectedMessage: Message = new Message();

  constructor(
    private messageService: MessagingService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.loadMessages();
  }

  respond(msg) {
    this.selectedMessage = msg;
    this.responding = true;
  }

  send() {
    this.response.sendDate = new Date();
    this.response.parentMessage = this.selectedMessage;
    this.response.receiver = this.selectedMessage.sender;
    this.response.sender = this.selectedMessage.receiver;
    this.response.subject = this.selectedMessage.subject;
    this.messageService.send(this.response).subscribe(message => {
      this.loadMessages();
      this.toastr.info('You message was sent to : ' + this.response.receiver.email);
      this.responding = false;
      this.response = new Message();
    }, error => {
      this.toastr.error('Error while sending the message', 'Message not sent');
    });
  }

  loadMessages() {
    this.messageService.loadForReceiver().subscribe((messages: any) => {
      this.messages = messages;
    });
  }

}
