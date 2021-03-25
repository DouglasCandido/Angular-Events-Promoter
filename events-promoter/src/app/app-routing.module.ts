import { AuthGuardEnthusiast } from './helpers/auth-guard-enthusiast.guard';
import { EventsReadComponent } from './views/events-read/events-read.component';
import { HomePromoterComponent } from './views/home-promoter/home-promoter.component';
import { HomeEnthusiastComponent } from './views/home-enthusiast/home-enthusiast.component';
import { LoginPromoterComponent } from './views/login/login-promoter/login-promoter.component';
import { LoginEnthusiastComponent } from './views/login/login-enthusiast/login-enthusiast.component';
import { RegistrationPromoterComponent } from './views/registration/registration-promoter/registration-promoter.component';
import { RegistrationEnthusiastComponent } from './views/registration/registration-enthusiast/registration-enthusiast.component';
import { LoginComponent } from './views/login/login.component';
import { IndexContentComponent } from './views/index-content/index-content.component';
import { RegistrationComponent } from './views/registration/registration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: IndexContentComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "registration/enthusiast", component:  RegistrationEnthusiastComponent },
  { path: "registration/promoter", component:  RegistrationPromoterComponent },
  { path: "login", component: LoginComponent },
  { path: "login/enthusiast", component:  LoginEnthusiastComponent },
  { path: "login/promoter", component:  LoginPromoterComponent },
  { path: "home_enthusiast", component: HomeEnthusiastComponent, canActivate: [AuthGuardEnthusiast] },
  { path: "home_promoter", component: HomePromoterComponent },
  { path: "home_enthusiast/events_read", component: EventsReadComponent, canActivate: [AuthGuardEnthusiast] },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const appRoutingModule = RouterModule.forRoot(routes);




