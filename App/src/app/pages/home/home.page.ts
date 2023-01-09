import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user: any;
  users: any = [];
  constructor(private apiService: ApiService,private router: Router, private route: ActivatedRoute,private modalCtrl: ModalController) {
    this.route.queryParams.subscribe(params => {
      this.user = params;
    });
  }

  

  ngOnInit() {
    console.log("object");
    this.apiService.getAllUsers().subscribe((res:any)=>{
      this.users = res
    })
  }

  async openModal(index:any) {
    if(index != -1){
      const modal = await this.modalCtrl.create({
        component: ModalComponent,
        componentProps:{
          correo: this.users[index].correo,
          contrasena: this.users[index].contraseña,
          nombre: this.users[index].nombre,
          apellido_p: this.users[index].apellido_p,
          apellido_m: this.users[index].apellido_m,
          telefono: this.users[index].telefono
        }
      });
      modal.present();
  
      const { data, role } = await modal.onWillDismiss();
  
      if (role === 'confirm') {
        this.apiService.updateUser(data).subscribe(()=>{
          let aux = this.users
          aux[index] = data
          this.users = aux
        })
      }
    }else{
      const modal = await this.modalCtrl.create({
        component: ModalComponent
      });
      modal.present();
  
      const { data, role } = await modal.onWillDismiss();
  
      if (role === 'confirm') {
        this.apiService.registerUser(data).subscribe(()=>{
          let aux = this.users
          aux.push(data)
          this.users = aux
        })
      }
    }
  }

  eliminar (index: any){
    this.apiService.deleteUser({correo:this.users[index].correo}).subscribe(()=>{
      if(this.users[index].correo == this.user.correo){
        this.router.navigate(['/login'],{ replaceUrl: true});
      }else{
        let aux = this.users
        this.users = aux.splice(index, 1)
      }
    })
  }

  salir(){
    this.router.navigate(['/login'],{ replaceUrl: true});
  }

}
