import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  /* per page name */
  searchnameList:any = [];
  selectedsearchnameItems:any = [];
  searchdropdownSettings:any = {};

  searchExpanded:boolean = false;

  constructor() { }

  ngOnInit(): void {
    /* per page name */
    this.searchnameList = [
      { item_id: 1, item_text: 'ICICI Prudential Infrastructure Fund' },
      { item_id: 2, item_text: 'ICICI Prudential BHARAT 22 FOF Scheme' },
      { item_id: 3, item_text: 'Kotak Infrastructure and Economic Reform Fund' },
      { item_id: 4, item_text: 'HSBC Small Cap Fund' },
      { item_id: 5, item_text: 'Aditya Birla Sun Life Infrastructure Fund' }
    ];
    this.selectedsearchnameItems = [];
    this.searchdropdownSettings = {
      singleSelection: true,
      allowSearchFilter: true,
      enableCheckAll: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
    };
  }


  public onFilterChange(item: any) {
    console.log(item);
  }
  public onDropDownClose(item: any) {
    console.log(item);
  }

  public onItemSelect(item: any) {
    console.log(item);
  }
  public onDeSelect(item: any) {
    console.log(item);
  }

  public onSelectAll(items: any) {
    console.log(items);
  }
  public onDeSelectAll(items: any) {
    console.log(items);
  }

  searchAction(){
    console.log("function called");
    this.searchExpanded =! this.searchExpanded;
    setTimeout(()=>{                           
      this.selectedsearchnameItems = [];  
    }, 1000);
  }

}
