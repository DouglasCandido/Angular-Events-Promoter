import { setBackgroundImageDirective } from './directives/set-background-image.directive';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './views/index/index.component';
import { LoginComponent } from './views/login/login.component';
import { LoginEnthusiastComponent } from './views/login/login-enthusiast/login-enthusiast.component';
import { LoginPromoterComponent } from './views/login/login-promoter/login-promoter.component';
import { HomeEnthusiastComponent } from './views/home-enthusiast/home-enthusiast.component';
import { HomePromoterComponent } from './views/home-promoter/home-promoter.component';
import { RegistrationComponent } from './views/registration/registration.component';
import { RegistrationEnthusiastComponent } from './views/registration/registration-enthusiast/registration-enthusiast.component';
import { RegistrationPromoterComponent } from './views/registration/registration-promoter/registration-promoter.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from './views/template/footer/footer.component';
import { HeaderComponent } from './views/template/header/header.component';
import { IndexContentComponent } from './views/index-content/index-content.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { LOCALE_ID } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import localePT from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import {MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS} from '@angular/material/radio';

registerLocaleData(localePT);

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    LoginEnthusiastComponent,
    LoginPromoterComponent,
    HomeEnthusiastComponent,
    HomePromoterComponent,
    RegistrationComponent,
    RegistrationEnthusiastComponent,
    RegistrationPromoterComponent,
    FooterComponent,
    HeaderComponent,
    IndexContentComponent,
    setBackgroundImageDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    AppRoutingModule,
    IvyCarouselModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatRadioModule,
  ],
  providers: [
    {
    provide: LOCALE_ID,
    useValue: "pt-BR"
    },
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }












