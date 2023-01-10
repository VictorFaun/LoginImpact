import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { NavigationExtras, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  correo: string = "";
  contrasena: string = "";
  error: boolean = false;
  message: string = "";


  constructor(private apiService: ApiService,public router: Router,private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  login =()=> {
    this.error= false

    if(!this.correo){
      this.error= true
      this.message="Correo electrónico en blanco"
      return
    }

    this.apiService.getUserById({"correo":this.correo}).subscribe((res:any)=>{
      if(res.length > 0){
        if(this.contrasena == res[0].contraseña){
          let extras: NavigationExtras = {
            queryParams: res[0],
            replaceUrl: true
          }
          this.router.navigate(['/home'],extras);
        }else{
          this.error= true
          this.message="Contraseña incorrecta"
        }
      }else{
        this.error= true
        this.message="Usuario no registrado"
      }
      
    });
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalComponent
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.apiService.registerUser(data).subscribe(()=>{})
    }
  }
}
