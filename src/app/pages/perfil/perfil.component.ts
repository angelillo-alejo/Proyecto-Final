import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  user: any = {}
  constructor(private authService: AuthService){}
  
  ngOnInit(): void {
    this.user= this.authService.getUser()
    
  }

  editar(){
    this.authService.editar(this.user.id,this.user).subscribe(()=>{
      alert("usuario editado")
    })
  }



}