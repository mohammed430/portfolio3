import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { CodingLanguagesComponent } from './coding-languages/coding-languages.component';
import { EducationComponent } from './education/education.component';
import { AccomplishmentComponent } from './accomplishment/accomplishment.component';

const routes: Routes = [
  { path: 'bio', component: BioComponent },
  { path: 'coding-languages', component: CodingLanguagesComponent },
  { path: 'education', component: EducationComponent },
  { path: 'accomplishment', component: AccomplishmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
