import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { AppComponent } from './app.component';
import { FormComponent} from './form/form.component'


const routes: Routes = [
  {path:'',component:FormComponent},
  {path:'form',component:FormComponent},
  {path:'cv',component:CvComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

