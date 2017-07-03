import { Component } from '@angular/core';
import {Platform} from "ionic-angular";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  rootPage = TabContentPage;
  isAndroid: boolean = false;
  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}

@Component({
  template: `
    <ion-header>
      <ion-navbar [color]="!isAndroid ? 'royal' : 'primary'">
        <button ion-button menuToggle>
          <ion-icon name="menu"></ion-icon>
        </button>
        <ion-title>tabs</ion-title>
      </ion-navbar>
    </ion-header>
  
    <ion-content>
      <div>hahaxixi</div>
    </ion-content>
  `
})
export class TabContentPage {
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}
