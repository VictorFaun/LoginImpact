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


  constructor(private apiService: ApiService,public router: Router,private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  login =()=> {
    this.apiService.getUserById({"correo":this.correo}).subscribe((res:any)=>{
      if(res.length > 0){
        if(this.contrasena == res[0].contraseña){
          let extras: NavigationExtras = {
            queryParams: res[0],
            replaceUrl: true
          }
          this.router.navigate(['/home'],extras);
        }else{
          console.log("Contraseña incorrecta");
        }
      }else{
        console.log("Usuario no existe");
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
