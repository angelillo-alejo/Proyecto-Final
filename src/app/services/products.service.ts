import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  db_url:string = "http://localhost:3000/products"//url y endpoint

  constructor(private http: HttpClient ) {}

  public productData= {
    name: "",
    image: "",
    description: "",
    price:"",
    id:""
  }
  getProducts(){
    return this.http.get(this.db_url)
  }
  getProduct(id:number){
    return this.http.get(`${this.db_url}/${id}`)
  }
  deleteProduct(id:number){
    return this.http.delete(`${this.db_url}/${id}`)
  }
  postProduct(product : any){//
    return this.http.post(this.db_url, product)
  }
  
}
//Hacemos la llamada a la API