import { Component, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public alertCtrl: AlertController) { }  
  
  async showAlert() {  
    const alert = await this.alertCtrl.create({  
      header: 'Product added to your cart!',  

      buttons: ['OK']  
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result);  
  }  
}  

