import { Component, OnInit } from '@angular/core';
import { NurseService, Appointments } from 'src/app/services/nurse.service';
import { ToastrService } from 'ngx-toastr';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {

  booking: Appointments = new Appointments("", "", "", "", "", "");
  nurses = [];
  doctors = [];

  constructor(
    private nurseService: NurseService,
    private doctorService: DoctorService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.loadNurses();
    this.loadDoctors();
  }

  createAppointments(): void {
    this.nurseService.createAppointments(this.booking)
      .subscribe(data => {
        this.toastr.info('Appointments created successfully.');
      });

  };

  loadNurses() {
    this.nurseService.getNurses().subscribe((resp: any) => {
      this.nurses = resp;
    }, error => {

    })
  }

  loadDoctors() {
    this.doctorService.getDoctors().subscribe((resp: any) => {
      this.doctors = resp;
    }, error => {

    })
  }

}
