import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shorting-filter',
  templateUrl: './shorting-filter.component.html',
  styleUrls: ['./shorting-filter.component.css']
})
export class ShortingFilterComponent implements OnInit {

  @ViewChild('multiSelect') multiSelect: any;

  /* per page name */
  perpagenameList:any = [];
  selectedperpagenameItems:any = [];
  perpagedropdownSettings:any = {};

  /* file type name */
  filetypenameList:any = [];
  selectedfiletypenameItems:any = [];
  filetypedropdownSettings:any = {};

  constructor() { }

  ngOnInit(): void {

    /* per page name */
    this.perpagenameList = [
      { item_id: 1, item_text: '25 per page' },
      { item_id: 2, item_text: '50 per page' },
      { item_id: 3, item_text: '100 per page' },
      { item_id: 4, item_text: 'All' },
    ];
    this.selectedperpagenameItems = [
      { item_id: 1, item_text: '25 per page' },
    ];
    this.perpagedropdownSettings = {
      singleSelection: true,
      allowSearchFilter: false,
      enableCheckAll: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
    };

    /* file type name */
    this.filetypenameList = [
      { item_id: 1, item_text: 'All' },
      { item_id: 2, item_text: 'Excel' },
      { item_id: 3, item_text: 'AMC PDF' },
      { item_id: 4, item_text: 'Custom PDF' },
    ];
    this.selectedfiletypenameItems = [
      { item_id: 1, item_text: 'All' },
    ];
    this.filetypedropdownSettings = {
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
