import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  constructor(
    public alertCtrl: AlertController) {
  }

  showBasicAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobim, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: 'Enter a name for this new album you\'re so keen on adding',
      inputs: [{
        name: 'title',
        placeholder: 'Title'
      }, {
        name: 'title1',
        placeholder: 'Title1'
      }],
      buttons: [{
        text: 'Cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }, {
        text: 'Save',
        handler: () => {
          console.log('Saved clicked');
        }
      }]
    });
    prompt.present();
  }

  showConfrim() {
    let confrim = this.alertCtrl.create({
      title: 'Use this lightsaber',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [{
        text: 'Disagree',
        handler: () => {
          console.log('Disagree clicked');
        }
      }, {
        text: 'Agree',
        handler: () => {
          console.log('Agree clicked');
        }
      }]
    });
    confrim.present();
  }

  showRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Lightsaber color');
    [{
      label: 'Blue',
      value: 'blue',
      checked: true
    }, {
      label: 'Green',
      value: 'green',
      checked: false
    }, {
      label: 'Red',
      value: 'red',
      checked: false
    }].forEach((item) => {
      alert.addInput({
        ...item,
        type: 'radio'
      });
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: (data) => {
        console.log(data);
      }
    });
    alert.present();
  }

  showCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Which planets have you visited?');
    [{
      label: 'Alderaan',
      value: 'value1',
      checked: true
    }, {
      label: 'Bespin',
      value: 'value2',
      checked: false
    }, {
      label: 'Hoth',
      value: 'value3',
      checked: false
    }].forEach((item) => {
      alert.addInput({
        ...item,
        type: 'checkbox'
      });
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: (data) => {
        console.log(data);
      }
    });
    alert.present();
  }
}
