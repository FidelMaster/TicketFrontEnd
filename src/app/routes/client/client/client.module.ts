import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { ClientRoutingModule } from '../client-routing/client-routing.module';
import { DashboardComponent } from '../../../components/client/dashboard/dashboard.component';
import {ClientNavbarComponent} from '../../../components/navigation/client-navbar/client-navbar.component' 
@NgModule({
  declarations: [DashboardComponent],
  imports: [

    CommonModule,
    ClientRoutingModule,
    HttpClientModule
  ]
})
export class ClientModule { }
