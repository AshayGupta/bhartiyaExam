import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})


export class ListPage {

  examNames : Array<string>;
  startDates : Array<string>;
  endDates : Array<string>;
  examsList: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.examNames = ['NVS Recruitment Navodaya Vidyalaya Samiti 351 PGTs TGTs and Faculty cum System Administration Vacancy','Sports','Computer','Science','History','Awards and Honours','Geography','Constitution','SSC','Banks','Politics','Economy'];

    this.startDates = ['15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017'];

    this.endDates = ['15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017'];

    this.examsList = [];
    for(let i=0; i < this.examNames.length; i++){
      this.examsList.push({
        name: this.examNames[i],
        startDate: this.startDates[i],
        endDate: this.endDates[i]
      });
    }

  }

  itemTapped(item) {

  }
}
