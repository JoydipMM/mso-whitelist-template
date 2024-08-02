import { Component, OnInit, ViewChild } from '@angular/core';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatTable, MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';


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

  constructor() {

   }

  ngOnInit(): void {
  }



  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'quantity'];
  dataSource = ELEMENT_DATA;

  drop(event: CdkDragDrop<string>) {
    const previousIndex = this.dataSource.findIndex(d => d === event.item.data);

    moveItemInArray(this.dataSource, previousIndex, event.currentIndex);
    this.table.renderRows();
  }

  drop2(event: CdkDragDrop<string>) {
    moveItemInArray(this.displayedColumns, event.previousIndex, event.currentIndex);
    //this.table.renderRows();
  }

  insertAt(array:any, index:any, ...elementsArray:any) {
    array.splice(index, 0, ...elementsArray);
  }


  addColumn() {
    // const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    // this.displayedColumns.push(this.displayedColumns[randomColumn]);
    const randomColumn = 1;
    const index = 2;
    //this.displayedColumns.push(this.displayedColumns[randomColumn]);
    console.log(this.displayedColumns);
    let ar = this.displayedColumns;

    console.log("Before:\n" + ar);
    ar.splice(index, 0, this.displayedColumns[randomColumn]);
    console.log("After:\n" + ar);
  }

  removeColumn() {
    if (this.displayedColumns.length) {
      this.displayedColumns.pop();
    }
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



  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  addDataDynamic(index:any) {
    // const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    // this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    // this.table.renderRows();
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




}
