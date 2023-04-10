import { AuthGuard } from './guards/auth.guard';
import { LogoutComponent } from './pages/logout/logout.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Rutas
const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
