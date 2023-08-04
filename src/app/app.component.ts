import {Component, OnInit} from '@angular/core';
import {GlobalService} from "./global.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Angular-task';
  constructor(private globalService:GlobalService) {
  }
  ngOnInit(): void {
    this.globalService.isLoggedIn.next(!!localStorage.getItem('token'))
  }
}
