import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ServiceProviders {

  constructor(public http: Http) {

  }

  public getSarkariResultData(){
    return new Promise(resolve => {
      this.http.get('http://www.bhartiyaexam.com/examsList','').map(response => response.json()).subscribe(data => {
        console.log("Sarkari result data", data);
        resolve(data);
      }, (error) => {
          console.log("Error from getSarkariResultData");
      });
    });

  }

}
