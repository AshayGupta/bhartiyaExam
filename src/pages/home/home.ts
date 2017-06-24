import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { SarkariResults } from '../sarkari-results/sarkari-results';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  icons : Array<string>;
  titles : Array<string>;
  links : Array<string>;
  grid: any[][] = [];

  constructor(public navCtrl: NavController) {
    this.titles = ['Railway','Sports','Computer','Science','History','Awards and Honours','Geography','Constitution','SSC','Banks','Politics','Economy'];

    this.icons = ['assets/images/railway.png','assets/images/sports.png','assets/images/computer.png','assets/images/science.png','assets/images/history.png','assets/images/awards.png','assets/images/geography.png','assets/images/constitution.png','assets/images/ssc.png','assets/images/banks.png','assets/images/politics.png','assets/images/economy.png'];

    this.links = ['http://www.bhartiyaexam.com/railway/1','http://www.bhartiyaexam.com/sports/10','http://www.bhartiyaexam.com/computer/11','http://www.bhartiyaexam.com/science/12','http://www.bhartiyaexam.com/history/2','http://www.bhartiyaexam.com/awards-and-honours/3','http://www.bhartiyaexam.com/geography/4','http://www.bhartiyaexam.com/indian-constitution/5','http://www.bhartiyaexam.com/ssc/6','http://www.bhartiyaexam.com/banks/7','http://www.bhartiyaexam.com/politics/8','http://www.bhartiyaexam.com/economy/9'];

  }

  ionViewDidLoad() {
    var k = 0;
    let numberOfCol = 3;
    let numberOfRow = Math.ceil(this.icons.length/numberOfCol);

    for (let i = 0; i < numberOfRow; i++) {
      this.grid[i] = [];
      for (let j = 0; j < numberOfCol; j++) {
        console.log(this.grid);
        this.grid[i].push({
          title: this.titles[k],
          icon: this.icons[k],
          link: this.links[k]
        });
        k = k + 1;
      }
    }
  }


  private clickSarkariNaukri(){
    this.navCtrl.push(ListPage);
  }

  private clickSarkariResults(){
    this.navCtrl.push(SarkariResults);
  }

  private openSubLink(link){
    window.location.href=link;
  }

}
