import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Constant } from '../utils/constant';

@Injectable()
export class ServiceProviders {

  private examsListUrl = Constant.appBaseUrl + 'examsList';
  private resultsListUrl = Constant.appBaseUrl + 'resultsList';

  constructor(public http: Http) {

  }

  public getSarkariExamsList(){
    return new Promise(resolve => {
      this.http.get(this.examsListUrl,'').map(response => response.json()).subscribe(data => {
        console.log("Sarkari exams list", data);
        resolve(data);
      }, (error) => {
          console.log("Error from getSarkariExamsList");
      });
    });
  }

  public getSarkariResultsList(){
    return new Promise(resolve => {
      this.http.get(this.resultsListUrl,'').map(response => response.json()).subscribe(data => {
        console.log("Sarkari results list", data);
        resolve(data);
      }, (error) => {
          console.log("Error from getSarkariResultsList");
      });
    });
  }

}
