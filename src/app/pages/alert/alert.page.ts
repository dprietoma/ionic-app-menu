import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  alertButtons = ['Action'];
  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  public  async onClick(){
      const alert = await this.alertCtrl.create({
        cssClass: 'my-custom-class',
        header: 'Alerta version 5',
        subHeader: 'Subtitle',
        message: 'This is an alert message.',
        buttons: ['OK'],
      });
  
      await alert.present();
  
      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }


}
