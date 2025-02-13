import { Component } from '@angular/core';
import { CuestionarioService } from './../servicios/cuestionario.service';
import { IPregunta } from './../interfaces/interfaces';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  //Zerbitzua inportatu
  constructor(private alertController: AlertController) {}

  async Erantzun() {
    const alert = await this.alertController.create({
      header: '¿De qué marca es este logotipo?',
      inputs: [
        {
            placeholder: 'Atención a la ortografía',
        },
    ],
      buttons: ['ENVIAR']
    });
  
    await alert.present();
  }
  
  //Metodo bat sortu "Erantzun" onclick egiteko
  //IGaldera bat jasoko du eta zerbitzua deituko du beharrezkoak diren eragiketak egiteko

  //Sortu metodo bat "Gorde"ren onclick-a kudeatzeko
  //Ez du parametrorik jasotzen eta zerbitzuari deituko dio dagokion eragiketak egiteko.

Guardar(){
  
}

}
