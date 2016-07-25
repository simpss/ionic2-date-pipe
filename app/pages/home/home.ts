import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  private date:Date;
  private displayPipedDate = false;

  constructor(private navCtrl: NavController) {

  }

  setDate(){
    this.date = new Date();
  }

  showPipedDate(){
    this.displayPipedDate = true;
  }
}
