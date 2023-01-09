import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'https://temis.impact.cl/victor_faundez/Api/controlador/UsuarioController.php';

  constructor(private http: HttpClient) { }

  getAllUsers(): any {
    return this.http.get(this.url+'?task=getAllUsers');
  }
  
  getUserById(body: any): any {
    return this.http.post(this.url+'?task=getUserById',body);
  }
  
  registerUser(body: any): any {
    return this.http.post(this.url+'?task=registerUser',body);
  }
  
  updateUser(body: any): any {
    return this.http.post(this.url+'?task=updateUser',body);
  }
  
  deleteUser(body: any): any {
    return this.http.post(this.url+'?task=deleteUser',body);
  }

}
