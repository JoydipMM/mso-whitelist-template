import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-hidden-rows-dialog',
  templateUrl: './show-hidden-rows-dialog.component.html',
  styleUrls: ['./show-hidden-rows-dialog.component.css']
})
export class ShowHiddenRowsDialogComponent implements OnInit {

  accroOpen:boolean = false;
  accroIndex:any;

  constructor() { }

  ngOnInit(): void {
  }

  accroOpenEvent(i:any, status:boolean){
    this.accroIndex = i;
    if(status === true){
      this.accroOpen = true;
    }
  }

}
