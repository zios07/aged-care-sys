import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PatientService } from 'src/app/services/patient.service';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: Array<any>;
  fewpatients: Array<any>;
  connectedRole;

  constructor(private patientService: PatientService, private toastr: ToastrService) { }

  ngOnInit() {
    const helper = new JwtHelperService();
    const token = helper.decodeToken(localStorage.getItem('token'));
    this.connectedRole = token.role;
    this.patientService.getAll().subscribe(data => {
      this.fewpatients = data;
      for (const patient of this.fewpatients) {
      }
    });
  }


  searchRecord(form: NgForm) {
    let theID: any;
    theID = this.patientService.prepareSearch(form);
    this.patientService.getFew(theID).subscribe(data => {
      this.fewpatients = data;
      for (const patient of this.fewpatients) {
      }
    }, error => {
      this.toastr.error('No result was found');
    });
  }
}
