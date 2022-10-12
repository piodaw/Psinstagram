import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DogProfileComponent } from './dog-profile/dog-profile.component';
import { HomeComponent } from './home/home.component';
import { DogSelectComponent } from './dog-select/dog-select.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DogProfileComponent,
    HomeComponent,
    DogSelectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'dogs/:slug', component: DogProfileComponent },
      { path: 'dogs/select/:slug', component: DogSelectComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
