import { Component, OnInit, ViewChild } from '@angular/core';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatTable, MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  quantity: number;
}

export const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', quantity: 100},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', quantity: 100},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', quantity: 100},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', quantity: 100},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', quantity: 100},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', quantity: 100},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', quantity: 100},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', quantity: 100},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', quantity: 100},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', quantity: 100},
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
    // const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    // this.displayedColumns.push(this.displayedColumns[randomColumn]);
    //const randomColumn = 1;
    //const index = 2;
    //this.displayedColumns.push(this.displayedColumns[randomColumn]);
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

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }



  enter() {
    console.log("enter");
    this.dragActive = true;
}

leave() {
    console.log("leave");
    this.dragActive = false;
}


}
