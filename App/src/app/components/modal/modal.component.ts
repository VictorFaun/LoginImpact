import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  correo: string= "";
  contrasena: string= "";
  nombre: string= "";
  apellido_p: string= "";
  apellido_m: string= "";
  telefono: string= "";

  activeEmail: boolean = false


  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    if(this.correo == ""){
      this.activeEmail = true
    }
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss({
      "correo": this.correo,
      "contraseña": this.contrasena,
      "nombre": this.nombre,
      "apellido_p": this.apellido_p,
      "apellido_m": this.apellido_m,
      "telefono": this.telefono
    }, 'confirm');
  }

}
