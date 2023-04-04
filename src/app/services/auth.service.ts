import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor (private http: HttpClient) {
    
   }

  //Funcion para login
  login (email: string, password: string){

  }

  //Funcion para el registro
  registrar (email: string, password: string, lastname: string, firstname: string) {
    //el post recibe una URL y un objeto
    return this.http.post("http://localhost:3000/register", 
    
    {
      email: email,
      password: password,
      firstname: firstname,
      lastname: lastname
    })

  }
  //Funcion para el cierre de sesion
  logout (){

  }


}

// El encargado de  la autenticar user: registro, logueo y cierre de sesion 
// Tenemos que importar el httpClient