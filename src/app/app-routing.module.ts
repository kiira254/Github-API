import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RepoComponent } from './repo/repo.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'user', component: UserComponent},
  { path: 'repos', component: RepoComponent},
  { path: 'home', component: HomeComponent},

  { path: '', redirectTo:"/home", pathMatch:"full"},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }