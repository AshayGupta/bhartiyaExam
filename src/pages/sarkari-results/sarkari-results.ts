import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { ServiceProviders } from '../../providers/service-providers';
import { GetResultsList } from '../../models/request/get-results-list';
import { Util } from '../../utils/util';
import { Constant } from '../../utils/constant';
import { InAppBrowser } from 'ionic-native';

@Component({
  selector: 'page-sarkari-results',
  templateUrl: 'sarkari-results.html'
})


export class SarkariResults {

// examNames : Array<string>;
// startDates : Array<string>;
// endDates : Array<string>;
// examsList: any[];
private noDataAvailable: string;
private getResultsList : GetResultsList[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProviders, public util: Util, private platform: Platform) {
    // this.examNames = ['NVS Recruitment Navodaya Vidyalaya Samiti 351 PGTs TGTs and Faculty cum System Administration Vacancy','Sports','Computer','Science','History','Awards and Honours','Geography','Constitution','SSC','Banks','Politics','Economy'];

    // this.startDates = ['15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017'];

    // this.endDates = ['15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017','15.06.2017'];

    this.getResultsListData();
  }

  private getResultsListData(){
    this.util.showLoading();
    this.service.getSarkariResultsList().then((data: GetResultsList[]) => {
      this.getResultsList = data;
      this.util.dismissLoading();
      if(data.length == 0){
        this.noDataAvailable = "No Result Available";
      }
    }, (error) => {
          this.noDataAvailable = "No Result Available";
          console.log("ERROR: ", error);
      });
  }

  private itemTapped(list) {
    // window.location.href = Constant.resultDetailsUrl + list.pageUrl;
    // window.open(Constant.resultDetailsUrl + list.pageUrl, '_blank');
    this.platform.ready().then(() => {
      let browser = new InAppBrowser("https://www.techiediaries.com",'_blank');
      
    });

  }

}
