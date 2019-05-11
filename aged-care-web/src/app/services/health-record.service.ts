import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HealthRecordService {

  constructor(private http: HttpClient) { }
  url = environment.API_URL + '/v1/health-records/';

  createHR(healthRecord, patientId) {
    return this.http.post(this.url + patientId, healthRecord);
  }

}
