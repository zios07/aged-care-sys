import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PatientService } from 'src/app/services/patient.service';
import { GiphyService } from 'src/app/services/giphy.service';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})

export class PatientEditComponent implements OnInit, OnDestroy {
  patient: any = {};
  sub: Subscription;
  patientId;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private patientService: PatientService,
    private giphyService: GiphyService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.patientId = params['id'];
      if (this.patientId) {
        this.patientService.get(this.patientId).subscribe((patient: any) => {
          if (patient) {
            this.patient = patient;
            this.patient.href = patient._links.self.href;
            this.giphyService.get(patient.name).subscribe(url => patient.giphyUrl = url);
          } else {
            this.gotoList();
          }
        });
      }
    });
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/patient-list']);
  }

  save(form: any) {
    if (form) {
      form.id = this.patientId;
    }
    this.patientService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }


  remove(href) {
    this.patientService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

}
