import { NgModule } from '@angular/core';
 
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from '../../../components/client/dashboard/dashboard.component';
import {ResumeComponent} from '../../../components/client/ticket/resume/resume.component';
import {CreateSoftlandComponent} from '../../../components/client/ticket/softland/create-softland/create-softland.component'; 
import {CreateComponent} from '../../../components/client/ticket/support/create/create.component'; 


const routes: Routes = [
  
  {path:'dashboard', component:DashboardComponent },
  {path:'softland/history', component: ResumeComponent},
  {path:'softland/create', component: CreateSoftlandComponent},
  {path:'support/history', component: ResumeComponent},
  {path:'support/create', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
