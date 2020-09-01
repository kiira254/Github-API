import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';
import { RepoComponent } from './repo/repo.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './user-service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { DateCountPipe } from './date-count.pipe';
import { HighlightDirective } from './highlight.directive'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RepoComponent,
    SearchComponent,
    UserComponent,
    DateCountPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
