import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  public API = environment.API_URL + '/v1/patients';

  constructor(private http: HttpClient) {
  }
  getAll(): Observable<any> {
    return this.http.get(this.API + '/prestigious')
  }

  get(id: string) {
    return this.http.get(this.API + '/' + id);
  }

  getFew(id: string): Observable<any> {
    return this.http.get(this.API + '/search/' + id);
  }

  prepareSearch(patient: any): Observable<any> {
    let theID: any;
    if (patient['searchid']) {
      theID = patient.searchid;
    } else {
      theID = patient.searchid;
    }
    return theID;
  }
  save(patient: any): Observable<any> {
    let result: Observable<Object>;
    if (patient['href']) {
      result = this.http.put(patient.href, patient);
    } else {
      result = this.http.post(this.API, patient);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
