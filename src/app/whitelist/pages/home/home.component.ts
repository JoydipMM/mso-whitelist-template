import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  publishedPerPage = 10;
  createdPerPage = 10;

  constructor() { }

  ngOnInit(): void {
    
  }

}
