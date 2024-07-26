import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-amc-card',
  templateUrl: './amc-card.component.html',
  styleUrls: ['./amc-card.component.css']
})
export class AmcCardComponent implements OnInit {

  @Input() amc:any;
  @Output() publishEventEmitter = new EventEmitter();
  @Output() unpublishEventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

    //console.log(this.amc)
  }

  publishAction(id:number){
    console.log("published ", id);
    this.publishEventEmitter.emit({...this.amc, published: true, id: id});
  }

  unpublishAction(id:number){
    console.log("Unpublished ", id);
    this.unpublishEventEmitter.emit({...this.amc, published: false, id: id});
  }

}
