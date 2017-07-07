import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProviders } from '../../providers/service-providers';
import { GetResultsList } from '../../models/request/get-results-list';
import { Util } from '../../utils/util';

@Component({
  selector: 'page-sarkari-results',
  templateUrl: 'sarkari-results.html'
})


export class SarkariResults {

  // examNames : Array<string>;
  // startDates : Array<string>;
  // endDates : Array<string>;
  // examsList: any[];
  private getResultsList : GetResultsList[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProviders, public util: Util) {
    // this.examNames = ['NVS Recruitment Navodaya Vidyalaya Samiti 351 PGTs TGTs and Faculty cum System Administration Vacancy','Sports','Computer','Science','History','Awards and Honours','Geography','Constitution','SSC','Banks','Politics','Economy'];

    // this.startDates = ['15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017'];

    // this.endDates = ['15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017'];

    // this.examsList = [];
    // for(let i=0; i < this.examNames.length; i++){
    //   this.examsList.push({
    //     name: this.examNames[i],
    //     startDate: this.startDates[i],
    //     endDate: this.endDates[i]
    //   });
    // }

    this.getResultsListData();
  }

  private getResultsListData(){
    this.util.showLoading();
    this.service.getSarkariResultsList().then((data: GetResultsList[]) => {
      this.getResultsList = data;
      this.util.dismissLoading();
    }, (error) => {
          console.log("ERROR: ", error);
      });
  }

  private itemTapped(item) {

  }

}
