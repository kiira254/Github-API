import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class UserService {
  userName: string;
  repoName: string;
  clientId: string= 'dc4cbc3dcccd8cfa4ec7';
  clientSecret: string = '5dfa88d45fa23b6c7ee535af8844baccfd42e61d';
  apikey: string = '2acdeec577f9c9bdce8b7dde1cbf27e1b5134f14'

  constructor(private http: HttpClient) {
    console.log('service is now ready');
  }
}
