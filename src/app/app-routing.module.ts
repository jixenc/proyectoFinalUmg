import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearLigasComponent } from './crear-ligas/crear-ligas.component';
import { EquiposComponent } from './equipos/equipos.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { RegistroComponent } from './registro/registro.component';
import { ClasificacionesComponent } from './clasificaciones/clasificaciones.component';
import { ModalCrearLigasComponent } from './modal-crear-ligas/modal-crear-ligas.component';
import { InvitarComponent } from './invitar/invitar.component';
import { ApostarComponent} from './apostar/apostar.component';
import { AuthGuard } from "./shared/auth.guard";
import { MisLigasComponent} from './mis-ligas/mis-ligas.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'',component:LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'principal', component: PrincipalComponent,canActivate: [AuthGuard]},
  {path: 'login',component: LoginComponent},
  {path: 'equipos',component: EquiposComponent},
  {path: 'crear-ligas', component: CrearLigasComponent},
  {path: 'clasificaciones', component: ClasificacionesComponent},
  {path: 'modal-crear-ligas', component: ModalCrearLigasComponent},
  {path: 'invitar', component: InvitarComponent},
  {path: 'apostar', component: ApostarComponent},
  {path: 'mis-ligas', component: MisLigasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
