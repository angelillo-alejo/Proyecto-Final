import { ProductsService } from './../../services/products.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  id!: number;
  product!: any;
  constructor(private productsService:ProductsService, private activatedRoute:ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    //La ruta que ponemos en el navegador  se guarda en la variable id
     this.activatedRoute.paramMap.subscribe(params=> {
       this.id = Number(params.get("id"));
     })
   //  llamada al servicio que tiene  la función getProduct a la que le pasamos  id para hacer petición individual
     this.productsService.getProduct(this.id).subscribe((data:any)=> {
       this.product = data
     })
   }
   deleteProduct() {
     this.productsService.deleteProduct(this.id).subscribe((data:any)=>{
       this.router.navigate(["/"])
     })
   }
   
   
   }
