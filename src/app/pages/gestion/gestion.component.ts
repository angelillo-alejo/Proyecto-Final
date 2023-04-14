import { ProductsService } from './../../services/products.service';
import { Router } from '@angular/router';

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss'],
})
export class GestionComponent {

  productForm!: FormGroup;
  //
  constructor(
    private formBuilder: FormBuilder,
    private producsService:ProductsService,
    private router: Router
  ) {}

  // Información por defecto que viene del servicio
  public newProduct = this.producsService.productData;//Esta info viene public productdata(produtc.service.ts)
  public productId = this.producsService.productData.id;

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      title: [
        this.newProduct.name,
        [Validators.required, Validators.minLength(1)],
      ],
      author: [
        this.newProduct.description,
        [Validators.required, Validators.minLength(1)],
      ],
      cover: [this.newProduct.image, [Validators.required]],
      company: [
        this.newProduct.price,
        [Validators.required, Validators.minLength(1)],
      ],
    });
    // Recoge los cambios delformularios y  seteando el valor de newProduct que  llega vacio del servicio
    this.productForm.valueChanges.subscribe((changes) => {
      this.newProduct = changes;
    });
  }
  //Funcion para llamar a newProduct
  onSubmit(){
    // console.log(this.newProduct)
    this.producsService.postProduct(this.newProduct).subscribe((data)=> {
      this.router.navigate(["/comics"])//retorna a la ruta establecida
    })
   this.productForm.reset()//Limpia el formulario
  }
}