import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent {

  email: string =''
  password: string = ''
  firstname: string ='' 
  lastname: string =''

  //Inyectamos  el servicio de autenticacion

constructor(private authService: AuthService) {

}

  //La funcion registrar llama al Json y le pasa todos los campos del form
  //Hay que generar un servicio de autenticacion: ng g service auth (en carpeta services)
  //El metodo registrar es el que se ejecuta cunado hacemos click en el boton enviar

  registrar () {
    this.authService.registrar(//registrar devuelve un obsevable porque es una llamada asincrona
      this.email,
      this.password,
      this.firstname,
      this.lastname
    ).subscribe (data =>{
      alert('ususario registrado')

    },
    error => {
      alert ('Upps Algo va mal colega')

    })

  }

}
