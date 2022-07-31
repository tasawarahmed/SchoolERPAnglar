import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './task-tracker/task-style.css' ]
})
export class AppComponent implements OnInit {
  title = 'SchoolERP';

  constructor(){

  }

  ngOnInit(){
  }

}
