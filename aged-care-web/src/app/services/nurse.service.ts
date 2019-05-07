
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export class Appointments {
  constructor(
    public apptNumber: string,
    public apptDate: string,
    public apptTime: string,
    public clientName: string,
    public address: string,
    public condition: string,

  ) { }

}

export class Records {
  constructor(
    public apptNumber: string,
    public apptDate: string,
    public apptTime: string,
    public clientName: string,
    public address: string,
    public condition: string,
    public recommendation: string,

  ) { }

}


@Injectable({
  providedIn: 'root'
})

export class NurseService {


  url = environment.API_URL;

  constructor(
    private httpClient: HttpClient
  ) { }

  getRecord() {
    return this.httpClient.get<Records[]>(this.url + '/records');
  }

  getAppointment() {
    return this.httpClient.get<Appointments[]>(this.url + '/appointments');
  }

  public createAppointments(appointments) {
    return this.httpClient.post<Appointments>(this.url + '/appointments', appointments);
  }
}
