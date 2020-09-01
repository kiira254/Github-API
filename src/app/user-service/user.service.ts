import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class UserService {
  userName: string;
  repoName: string;
  clientId: string= '"MDQ6VXNlcjY3Njg5Nzk0"';
  clientSecret: string = '5dfa88d45fa23b6c7ee535af8844baccfd42e61d';
  apikey: string = 'd096e17415f37a53e8e6e7b11da78963dc315340'

  constructor(private http: HttpClient) {
    console.log('service is now ready');
  }
  getProfileInfo(){
   return this.http.get("https://api.github.com/users/" + this.userName + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
 
 }
 getProfileRepos(){
   return this.http.get("https://api.github.com/users/" + this.userName + "/repos?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
 }
 searchrepos() {
   return this.http.get('https://api.github.com/search/repositories?q=' + this.repoName, ({
     headers: new HttpHeaders({Authorization: `token ${this.apikey}`})
   }))
 }
 updateProfile(userName:string){
   this.userName =userName
 }
 UpdateRepo(repoName:string) {
   this.repoName = repoName;
 }

}