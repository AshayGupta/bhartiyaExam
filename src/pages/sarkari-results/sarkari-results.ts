import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProviders } from '../../providers/service-providers';
import { GetExamsList } from '../../models/request/get-exams-list';

@Component({
  selector: 'page-sarkari-results',
  templateUrl: 'sarkari-results.html'
})


export class SarkariResults {

  private resultsNames: Array<string>;
  private resultsList: any[];
  private getExamsList : GetExamsList;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProviders) {
    // this.resultsNames = [' Senior School Certificate Examination (Class XII ) 2017 Announced on 28th May 2017', 'Sports', 'Computer', 'Science', 'History', 'Awards and Honours', 'Geography', 'Constitution', 'SSC', 'Banks', 'Politics', 'Economy'];
    //
    // this.resultsList = [];
    // for (let i = 0; i < this.resultsNames.length; i++) {
    //   this.resultsList.push({
    //     name: this.resultsNames[i],
    //     increment: i + 1
    //   });
    // }
    this.getExamsList = new GetExamsList();

    service.getSarkariResultData().then(data => {


      
    });
  }




  itemTapped(item) {

  }

}
