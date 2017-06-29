import { Component } from '@angular/core';

@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html',
})
export class ListsPage {
  items = [
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
  ];
  constructor() {
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
}
