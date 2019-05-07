import { Component, OnInit } from '@angular/core';
import { NurseService } from 'src/app/services/nurse.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  appointments: string[];

  constructor(
    private nurseService: NurseService
  ) { }

  ngOnInit() {
    this.nurseService.getAppointment().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    this.appointments = response;
  }

}

