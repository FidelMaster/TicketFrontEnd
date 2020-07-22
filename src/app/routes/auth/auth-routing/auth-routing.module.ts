import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { SignInClientComponent } from '../../../components/auth/client/sign-in-client/sign-in-client.component';
import { SignUpClientComponent } from '../../../components/auth/client/sign-up-client/sign-up-client.component';
import { SignInComponent } from '../../../components/auth/agent/sign-in/sign-in.component'

const routes: Routes = [

  { path: 'client/signin', component: SignInClientComponent },
  { path: 'client/signup', component: SignUpClientComponent },
  { path: 'agent/signin', component: SignInComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
