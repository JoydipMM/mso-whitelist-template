import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  publishedPerPage = 10;
  createdPerPage = 10;

  demoamclist = [
    {
      id: 1,
      title: 'Aditya Birla Sun Life Mutual Fund',
      filename: 'Commissioning List Mar,2024',
      date: '21st Feb. 2024',
      published: false,
      created: false,
    },
    {
      id: 2,
      title: 'Aditya Birla Sun Life Mutual Fund 2',
      filename: 'Commissioning List Apr,2024',
      date: '21st Feb. 2024',
      published: false,
      created: true,
    },
    {
      id: 3,
      title: 'Aditya Birla Sun Life Mutual Fund 3',
      filename: 'Commissioning List May,2024',
      date: '22nd Feb. 2024',
      published: false,
      created: true,
    },
    {
      id: 4,
      title: 'Aditya Birla Sun Life Mutual Fund 4',
      filename: 'Commissioning List June,2024',
      date: '23rd Feb. 2024',
      published: false,
      created: true,
    },
    {
      id: 5,
      title: 'Aditya Birla Sun Life Mutual Fund 5',
      filename: 'Commissioning List July,2024',
      date: '24th Feb. 2024',
      published: true,
      created: true,
    },
  ]

  constructor() { }

  ngOnInit(): void {
    
  }

  displayUpdated(event:any){
    console.log("updated info ", event);
    var id = event.id;
    //var publshStatus = event.published;
    //console.log("id---- ", id, 'published---- ', publshStatus);

    let indexToUpdate = this.demoamclist.findIndex(item => item.id === id);
    this.demoamclist[indexToUpdate] = event;
    console.log(this.demoamclist[indexToUpdate]);

    this.demoamclist = Object.assign([], this.demoamclist);
  }

  falseCheck(data:any){
    let is_publish;
    data.forEach((element:any) => {
      if(element.published == true){
        is_publish = true;
      }
    });
    //console.log(is_publish);
    return is_publish;

  }

}
