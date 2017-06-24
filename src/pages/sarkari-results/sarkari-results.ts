import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-sarkari-results',
  templateUrl: 'sarkari-results.html',
})


export class SarkariResults {

  resultsNames : Array<string>;
  resultsList: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.resultsNames = [' Senior School Certificate Examination (Class XII ) 2017 Announced on 28th May 2017','Sports','Computer','Science','History','Awards and Honours','Geography','Constitution','SSC','Banks','Politics','Economy'];

    this.resultsList = [];
    for(let i=0; i < this.resultsNames.length; i++){
      this.resultsList.push({
        name: this.resultsNames[i],
        increment: i + 1
      });
    }

    this.wsCall();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SarkariResults');
  }

  private wsCall(){

  }



  itemTapped(item) {

  }

}
