import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent {

  email: string = ""
  password: string = ""
  firstname: string = ""
  lastname: string = ""

  constructor(private authService: AuthService){}

  registrar(){
    this.authService.registrar(
      this.email,
      this.password,
      this.firstname,
      this.lastname,
      
    ).subscribe(data=>{
      alert('usuario registrado')
    },
    error=>{
      alert('error al registrar')
    })
  }

}