import { Component, OnInit } from '@angular/core';
import {User} from '../user'
import { UserService } from '../user-service/user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService:UserService,private user:User) {

  }

//   findProfile(){
//    this.userService.updateProfile(this.userName);

//    this.userService.getProfileInfo().subscribe(profile =>{
//      console.log(profile);
//    this.profile= profile      
//    });

//    this.userService.getProfileRepos().subscribe(repos =>{
//      console.log(repos);
//    this.repos= repos;      
   
//    })
//  }

 ngOnInit(){
  //  this.findProfile()
 }

}
