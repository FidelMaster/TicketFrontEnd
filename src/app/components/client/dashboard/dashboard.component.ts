import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";

import { AuthService } from '../../../services/authentication/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  datas = [];
  historys=[];
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.authService.ClientInfo()
    .subscribe(
      res => {
        console.log(res)
        this.datas= res.data;
        this.historys=res.ticket;
      },
      err => console.log(err)
    )
  }

}
