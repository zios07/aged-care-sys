import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  url = environment.API_URL + '/api/messaging';

  constructor(private http: HttpClient) { }

  send(body) {
    return this.http.post(this.url + '/send', body);
  }

  loadForReceiver() {
    return this.http.get(this.url + '/my/inbox');
  }

  loadReceivedMessages() {
    return this.http.get(this.url);
  }

  loadSentMessages() {
    return this.http.get(this.url);
  }
}
