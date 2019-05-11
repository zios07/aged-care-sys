import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }
  url = environment.API_URL + '/v1/doctors/';

  getInfo(name) {
    return this.http.get(this.url + name + '/healthrecord');
  }

  getInfoByPatientID(partientID) {
    return this.http.get(this.url + 'healthrecord/patient/' + partientID);
  }

  getDoctors() {
    return this.http.get(this.url);
  }


}
