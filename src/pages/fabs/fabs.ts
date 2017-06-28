import { Component } from '@angular/core';
import { FabContainer } from "ionic-angular";

@Component({
  selector: 'page-fabs',
  templateUrl: 'fabs.html',
})
export class FabsPage {

  constructor() {
  }

  public share(socialNet: string, fab: FabContainer) {
    fab.close();
    console.log('Sharing in', socialNet);
  }
}
