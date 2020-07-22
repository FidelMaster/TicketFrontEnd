import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// importing modules for consome api and forms
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { AuthRoutingModule } from '../auth-routing/auth-routing.module';

//Importing components
import { SignInClientComponent } from '../../../components/auth/client/sign-in-client/sign-in-client.component';
import { SignUpClientComponent } from '../../../components/auth/client/sign-up-client/sign-up-client.component';
import { SignInComponent } from '../../../components/auth/agent/sign-in/sign-in.component'

// importing service
import { AuthService } from '../../../services/authentication/auth.service';
@NgModule({
  declarations: [SignInClientComponent,SignInComponent,SignUpClientComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService]
})
export class AuthModule { }
