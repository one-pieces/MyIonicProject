import { Component } from '@angular/core';

@Component({
  selector: 'page-select',
  templateUrl: 'select.html',
})
export class SelectPage {
  gaming: string = 'n64';
  gender: string = 'f';
  os:string;
  music: string;
  month: string;
  year: string;
  toppings: string[] = [];

  musicAlertOpts: { title: string, subTitle: string };
  constructor() {
    this.musicAlertOpts = {
      title: '1994 Music',
      subTitle: 'Select your favorite'
    };
  }

  stpSelect() {
    console.log('STP selected');
  }
}
