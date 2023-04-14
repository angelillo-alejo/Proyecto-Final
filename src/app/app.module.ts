import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './core/nav/nav.component';
import { FooterComponent } from './core/footer/footer.component';
import { SlideComponent } from './core/slide/slide.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { HomeComponent } from './pages/home/home.component';
import { LogoutComponent } from './pages/logout/logout.component';

import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/product/product.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { DetailComponent } from './pages/gestion/detail/detail.component';

import { HeaderComponent } from './core/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SlideComponent,
    LoginComponent,
    RegistrarComponent,
    PerfilComponent,
    HomeComponent,
    LogoutComponent,
    HeaderComponent,
    ProductsComponent,
    ProductComponent,
    GestionComponent,
    DetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


//https://github.com/JoseUH/Front/tree/master/7.projectoFinal

//https://github.com/ainoacp/project-shopeame-angular-front/tree/main/src/app/shared

//https://github.com/bobangajicsm/E-Commerce-Store/tree/main/src/app

//INSTALAR BOOSTRAP
//npm i boostrap, luego se anade en el json, directorios 
//para el buscador: https://es.stackoverflow.com/questions/421502/buscador-en-angular-11-con-pipe-filter
//styles:node_modules/bootstrap/dist/css/bootstrap.css
// y scripts:  node_modules/bootstrap/dist/js/bootstrap.js


// Min 1:19