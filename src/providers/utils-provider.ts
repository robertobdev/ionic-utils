import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from 'ionic-angular';

@Injectable()
export class UtilsProvider {

  public static readonly URL = ""; //put your url to providers API

  constructor(public alertCtrl: AlertController, public loadingCtrl: LoadingController) { }

  makeAlert(title: string, message: string) {
    let confirm = this.alertCtrl.create({
      title: title,
      message: message,
      enableBackdropDismiss: false,
      buttons: [
        {
          text: "OK",
          handler: () => {
            console.log('OK clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  makeLoading(message: string) {
    let loading = this.loadingCtrl.create({
      content: message
    });
    loading.present();
    return loading;
  }
}