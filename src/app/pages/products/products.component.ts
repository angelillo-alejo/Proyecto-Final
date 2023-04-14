import { ProductsService } from './../../services/products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  productList : any [] = [];//cambio comicList por productList

  constructor(private productsService:ProductsService){}

  ngOnInit(): void {
  


    this.productsService.getProducts().subscribe((data:any)=>{
      console.log(data)
      this.productList= [...data]//cambio comicList por productList
    })

  }
}
