import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BioComponent } from './bio/bio.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CodingLanguagesComponent } from './coding-languages/coding-languages.component';
import { EducationComponent } from './education/education.component';
import { AccomplishmentComponent } from './accomplishment/accomplishment.component';

@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CodingLanguagesComponent,
    EducationComponent,
    AccomplishmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
