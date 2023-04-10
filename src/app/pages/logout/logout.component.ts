import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit{

  constructor (private authService: AuthService, private router: Router){}

  ngOnInit(): void {
    setTimeout(()=>{
      this.authService.logout()
      this.router.navigateByUrl("/")//Manda al user a la home
    },2000 )
  }

}