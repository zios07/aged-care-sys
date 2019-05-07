import { Component, OnInit } from '@angular/core';
import { NurseService } from 'src/app/services/nurse.service';

@Component({
  selector: 'app-visit-records',
  templateUrl: './visit-records.component.html',
  styleUrls: ['./visit-records.component.css']
})
export class VisitRecordsComponent implements OnInit {

  records: string[];

  constructor(
    private nurseService: NurseService
  ) { }

  ngOnInit() {

    this.nurseService.getRecord().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    this.records = response;
  }

}

