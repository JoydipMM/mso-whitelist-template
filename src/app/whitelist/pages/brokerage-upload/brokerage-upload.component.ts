import { Component, OnInit, ViewChild } from '@angular/core';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatTable, MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { ExcelUploadDialogComponent } from '../../components/dialogs/excel-upload-dialog/excel-upload-dialog.component';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: number;
  symbol: string;
  quantity: number;
}

export const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'Bulk Uploaded Scheme Name', name: 'Hydrogen', weight: 1.0079, symbol: 'H', quantity: 100},
  {position: 'Bulk Uploaded Scheme Name', name: 'Helium', weight: 4.0026, symbol: 'He', quantity: 100},
  {position: 'Bulk Uploaded Scheme Name', name: 'Lithium', weight: 6.941, symbol: 'Li', quantity: 100},
  {position: 'Bulk Uploaded Scheme Name', name: 'Beryllium', weight: 9.0122, symbol: 'Be', quantity: 100},
  {position: 'Bulk Uploaded Scheme Name', name: 'Boron', weight: 10.811, symbol: 'B', quantity: 100},
  {position: 'Bulk Uploaded Scheme Name', name: 'Carbon', weight: 12.0107, symbol: 'C', quantity: 100},
  {position: 'Bulk Uploaded Scheme Name', name: 'Nitrogen', weight: 14.0067, symbol: 'N', quantity: 100},
  {position: 'Bulk Uploaded Scheme Name', name: 'Oxygen', weight: 15.9994, symbol: 'O', quantity: 100},
  {position: 'Bulk Uploaded Scheme Name', name: 'Fluorine', weight: 18.9984, symbol: 'F', quantity: 100},
  {position: 'Bulk Uploaded Scheme Name', name: 'Neon', weight: 20.1797, symbol: 'Ne', quantity: 100},
];
@Component({
  selector: 'app-brokerage-upload',
  templateUrl: './brokerage-upload.component.html',
  styleUrls: ['./brokerage-upload.component.css']
})
export class BrokerageUploadComponent implements OnInit {

  @ViewChild('table', {static: true}) table: MatTable<PeriodicElement> | any;

  dragActive:boolean = false;

  /* gst switch */
  checked = false;
  disabled = false;

  /* amc name */
  amcnameList:any = [];
  selectedamcnameItems:any = [];
  amcdropdownSettings:any = {};

  constructor(public dialog: MatDialog) {

   }

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
      singleSelection: true,
      allowSearchFilter: true,
      enableCheckAll: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
    };

    this.openUploadExcelDialog();
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



  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'quantity'];
  dataSource = ELEMENT_DATA;

  rowDrop(event: CdkDragDrop<string>) {
    const previousIndex = this.dataSource.findIndex(d => d === event.item.data);
    moveItemInArray(this.dataSource, previousIndex, event.currentIndex);
    this.table.renderRows();
  }

  columnDrop(event: CdkDragDrop<string>) {
    moveItemInArray(this.displayedColumns, event.previousIndex, event.currentIndex);
    //this.table.renderRows();
  }

  insertAt(array:any, index:any, ...elementsArray:any) {
    array.splice(index, 0, ...elementsArray);
  }


  // addColumn() {
  //   const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
  //   this.displayedColumns.push(this.displayedColumns[randomColumn]);
  //   this.displayedColumns.push(this.displayedColumns[randomColumn]);
  // }

  // removeColumn() {
  //   if (this.displayedColumns.length) {
  //     this.displayedColumns.pop();
  //   }
  // }

  removeColumnDynamic(i:any) {
    // if (this.displayedColumns) {
    //   this.displayedColumns.pop();
    // }
  }

  getColumnIndex(name: string): number {
    return this.displayedColumns.indexOf(name);
  }

  addColumnDynamic(index:any){
    console.log(this.displayedColumns);
    let ar = this.displayedColumns;

    console.log("Before:\n" + ar);
    ar.splice(index, 0, this.displayedColumns[index]);
    console.log("After:\n" + ar);
  }



  // addData() {
  //   const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
  //   this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
  //   this.table.renderRows();
  // }

  addDataDynamic(index:any) {
    let ar = this.dataSource;
    //console.log("Before:\n" + ar);
    ar.splice(index, 0, this.dataSource[index]);
    //console.log("After:\n" + ar);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }


  /* upload excel popup */
  openUploadExcelDialog() {
    this.dialog.open(ExcelUploadDialogComponent, { width: '548px', panelClass: 'upload-excel-dialog' });
  }


}
