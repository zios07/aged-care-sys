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

  constructor(private route: ActivatedRoute,
    private router: Router,
    private patientService: PatientService,
    private giphyService: GiphyService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.patientService.get(id).subscribe((patient: any) => {
          if (patient) {
            this.patient = patient;
            this.patient.href = patient._links.self.href;
            this.giphyService.get(patient.name).subscribe(url => patient.giphyUrl = url);
          } else {
            console.log(`Patient with id '${id}' not found, returning to the list`);
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

  save(form: NgForm) {
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
