import { Component, OnInit } from '@angular/core';
import { NurseService, Appointments } from 'src/app/services/nurse.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {

  booking: Appointments = new Appointments("", "", "", "", "", "");

  constructor(
    private nurseService: NurseService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  createAppointments(): void {
    this.nurseService.createAppointments(this.booking)
      .subscribe(data => {
        this.toastr.info('Appointments created successfully.');
      });

  };

}
