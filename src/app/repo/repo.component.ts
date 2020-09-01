import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service'
import {Repo} from '../repo'

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  reposItems: any[];
  reposName: string='Githubsearch';
  
  constructor(private userService:UserService,private repo:Repo) {

  }

 
  findRepo() {
    this.userService.UpdateRepo(this.reposName);
    this.userService.searchrepos().subscribe(repo => {

     this.reposItems = repo['items'];
     console.log(this.reposItems);
    })
  }

 ngOnInit() {
   this.findRepo()
 }

}
