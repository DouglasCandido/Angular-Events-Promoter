import { MyPastPromotedEventsComponent } from './views/my-past-promoted-events/my-past-promoted-events.component';
import { PromoteNewEventComponent } from './views/promote-new-event/promote-new-event.component';
import { MyCurrentPromotingEventsComponent } from './views/my-current-promoting-events/my-current-promoting-events.component';
import { AuthGuardPromoter } from './helpers/auth-guard-promoter.guard';
import { AvailableEventsComponent } from './views/available-events/available-events.component';
import { AuthGuardEnthusiast } from './helpers/auth-guard-enthusiast.guard';
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
  { path: "home_promoter", component: HomePromoterComponent, canActivate: [AuthGuardPromoter] },
  { path: "home_enthusiast/available_events", component: AvailableEventsComponent, canActivate: [AuthGuardEnthusiast] },
  { path: "home_promoter/my_current_promoting_events", component: MyCurrentPromotingEventsComponent, canActivate: [AuthGuardPromoter] },
  { path: "home_promoter/promote_new_event", component: PromoteNewEventComponent, canActivate: [AuthGuardPromoter] },
  { path: "home_promoter/my_past_promoted_events", component: MyPastPromotedEventsComponent, canActivate: [AuthGuardPromoter] },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const appRoutingModule = RouterModule.forRoot(routes);




