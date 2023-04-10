import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private cookies: CookieService) { }

  login(email: string, password: string): Observable<any>{
    return this.http.post("http://localhost:3000/login",
    {
      email:email,
      password:password
    })
  }

  registrar(email:string, password: string, firstname: string, lastname: string){
    return this.http.post("http://localhost:3000/register", 
    {
      email: email,
      password: password,
      firstname: firstname,
      lastname: lastname,
    }
    )
  }

  logout(){//quita cookie
    this.cookies.delete("user")
  }

  setUser(user: any){
    this.cookies.set("user",JSON.stringify(user))//stringify convierte funcion en objeto
  }

  getUser(){
    try {
      return JSON.parse(this.cookies.get("user"))//parse convierte string a objeto
    } catch (error) {
      return null
    }
  }

  estaLoggeado():boolean{
    return this.cookies.check("user")
  }
}