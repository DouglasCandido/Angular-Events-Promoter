import { DonationComponent } from './views/donation/donation.component';
import { ContactComponent } from './views/contact/contact.component';
import { LoginComponent } from './views/login/login.component';
import { IndexContentComponent } from './views/index-content/index-content.component';
import { RegistrationComponent } from './views/registration/registration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: IndexContentComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "login", component: LoginComponent },
  { path: "donation", component: DonationComponent },
  { path: "contact", component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }





