import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/pages/services/api.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  isCreateUser:boolean = true

  correo: string= "";
  contrasena: string= "";
  nombre: string= "";
  apellido_p: string= "";
  apellido_m: string= "";
  telefono: string= "";

  activeEmail: boolean = false

  error: boolean = false
  message:string = ""


  constructor(private apiService: ApiService,private modalCtrl: ModalController) { }

  ngOnInit() {
    if(this.correo == ""){
      this.activeEmail = true
    }
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    
    this.error=false;

    if(!this.correo || !this.contrasena || !this.nombre || !this.apellido_p || !this.apellido_m || !this.telefono ){
      
      this.error=true;
      this.message = "No pueden quedar campos en blanco"
      return
    }
    this.apiService.getUserById({"correo":this.correo}).subscribe((res:any)=>{
      console.log(res);
      if(res.length == 0){
        this.modalCtrl.dismiss({
          "correo": this.correo,
          "contraseña": this.contrasena,
          "nombre": this.nombre,
          "apellido_p": this.apellido_p,
          "apellido_m": this.apellido_m,
          "telefono": this.telefono
        }, 'confirm');
      }else{
        this.error=true;
        this.message = "Correo electrónico en uso"
      }
    })


    
  }

}
