import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-excel-upload-dialog',
  templateUrl: './excel-upload-dialog.component.html',
  styleUrls: ['./excel-upload-dialog.component.css']
})
export class ExcelUploadDialogComponent implements OnInit {

  @ViewChild('multiSelect') multiSelect: any;

  /* amc name */
  amcnameList:any = [];
  selectedamcnameItems:any = [];
  amcdropdownSettings:any = {};

  /* amc financial year */
  amcFYearList:any = [];
  selectedamcFYearItems:any = [];
  amcFYeardropdownSettings:any = {};

  /* amc Quarter */
  amcQuarterList:any = [];
  selectedamcQuarterItems:any = [];
  amcQuarterdropdownSettings:any = {};

  /* amc Calendar Year */
  amcCldrYearList:any = [];
  selectedamcCldrYearItems:any = [];
  amcCldrYeardropdownSettings:any = {};

  /* amc Month */
  amcMonthList:any = [];
  selectedamcMonthItems:any = [];
  amcMonthdropdownSettings:any = {};

  PeriodType:any = 'Quarterly';

  constructor() { }

  ngOnInit(): void {

    /* amc name */
    this.amcnameList = [
      { item_id: 1, item_text: 'ICICI Prudential Infrastructure Fund' },
      { item_id: 2, item_text: 'ICICI Prudential BHARAT 22 FOF Scheme' },
      { item_id: 3, item_text: 'Kotak Infrastructure and Economic Reform Fund' },
      { item_id: 4, item_text: 'HSBC Small Cap Fund' },
      { item_id: 5, item_text: 'Aditya Birla Sun Life Infrastructure Fund' }
    ];
    this.selectedamcnameItems = [
      // { item_id: 3, item_text: 'Kotak Infrastructure and Economic Reform Fund' },
      // { item_id: 4, item_text: 'HSBC Small Cap Fund' }
    ];
    this.amcdropdownSettings = {
      singleSelection: false,
      allowSearchFilter: true,
      enableCheckAll: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
    };

    
    /* amc financial year */
    this.amcFYearList = [
      { item_id: 1, item_text: '2024-2025' },
      { item_id: 2, item_text: '2023-2024' },
      { item_id: 3, item_text: '2022-2023' },
      { item_id: 4, item_text: '2022-2023' },
    ];
    this.selectedamcFYearItems = [
      { item_id: 3, item_text: '2022-2023' },
      { item_id: 4, item_text: '2022-2023' },
    ];
    this.amcFYeardropdownSettings = {
      singleSelection: true,
      allowSearchFilter: false,
      enableCheckAll: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
    };


    /* amc Quarter */
    this.amcQuarterList = [
      { item_id: 1, item_text: 'Q1 APR - JUNE' },
      { item_id: 2, item_text: 'Q2 JULY - SEP' },
      { item_id: 3, item_text: 'Q3 OCT - DEC' },
      { item_id: 4, item_text: 'Q4 JAN - MAR' },
    ];
    this.selectedamcQuarterItems = [
      { item_id: 1, item_text: 'Q1 APR - JUNE' },
      { item_id: 2, item_text: 'Q2 JULY - SEP' },
    ];
    this.amcQuarterdropdownSettings = {
      singleSelection: true,
      allowSearchFilter: false,
      enableCheckAll: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
    };


    /* amc Calendar Year */
    this.amcCldrYearList = [
      { item_id: 1, item_text: '2024' },
      { item_id: 2, item_text: '2023' },
      { item_id: 3, item_text: '2022' },
      { item_id: 4, item_text: '2021' },
    ];
    this.selectedamcCldrYearItems = [
      { item_id: 1, item_text: '2024' },
      { item_id: 2, item_text: '2023' },
    ];
    this.amcCldrYeardropdownSettings = {
      singleSelection: true,
      allowSearchFilter: false,
      enableCheckAll: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
    };


    /* amc Month */
    this.amcMonthList = [
      { item_id: 1, item_text: 'Januray' },
      { item_id: 2, item_text: 'February' },
      { item_id: 3, item_text: 'March' },
      { item_id: 4, item_text: 'April' },
    ];
    this.selectedamcMonthItems = [
      { item_id: 1, item_text: 'Januray' },
      { item_id: 2, item_text: 'February' },
    ];
    this.amcMonthdropdownSettings = {
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
