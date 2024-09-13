import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  /* amc name */
  amcnameList:any = [];
  selectedamcnameItems:any = [];
  amcdropdownSettings:any = {};

  constructor() { }

  ngOnInit(): void {

    /* amc name */
    this.amcnameList = [
      { item_id: 1, item_text: 'Lumpsum Performance' },
      { item_id: 2, item_text: 'SIP Performance' },
      { item_id: 3, item_text: 'Scheme Comparison' },
      { item_id: 4, item_text: 'Scheme Snapshot' },
      { item_id: 5, item_text: 'Scheme Portfolio' },
      { item_id: 6, item_text: 'Portfolio Overlap' },
      { item_id: 7, item_text: 'Rolling Return' },
    ];
    this.selectedamcnameItems = [
      // { item_id: 3, item_text: 'Kotak Infrastructure and Economic Reform Fund' },
      // { item_id: 4, item_text: 'HSBC Small Cap Fund' }
    ];
    this.amcdropdownSettings = {
      singleSelection: true,
      allowSearchFilter: false,
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





}
