import { fakeAuthenticationBackendPromoterProvider } from './helpers/fake-authentication-backend-promoter';
import { PromoterErrorInterceptor } from './helpers/promoter-error-interceptor.interceptor';
import { PromoterJWtInterceptor } from './helpers/promoter-jwt-interceptor.interceptor';
import { EnthusiastJWtInterceptor } from './helpers/enthusiast-jwt-interceptor.interceptor';
import { EnthusiastErrorInterceptor } from './helpers/enthusiast-error-interceptor.interceptor';
import { fakeAuthenticationBackendEnthusiastProvider } from './helpers/fake-authentication-backend-enthusiast';
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
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';
import { IndexContentComponent } from './views/index-content/index-content.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { LOCALE_ID } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import localePT from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import {MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS} from '@angular/material/radio';
import { AvailableEventsComponent } from './views/available-events/available-events.component';
import { SideNavEnthusiastComponent } from './components/template/side-nav-enthusiast/side-nav-enthusiast.component';
import { HeaderEnthusiastComponent } from './components/template/header-enthusiast/header-enthusiast.component';
import { FooterLoggedComponent } from './components/template/footer-logged/footer-logged.component';
import { SocialLoginModule, SocialAuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { HeaderPromoterComponent } from './components/template/header-promoter/header-promoter.component';
import { SideNavPromoterComponent } from './components/template/side-nav-promoter/side-nav-promoter.component';
import { MyCurrentPromotingEventsComponent } from './views/my-current-promoting-events/my-current-promoting-events.component';
import { PromoteNewEventComponent } from './views/promote-new-event/promote-new-event.component';
import { MyPastPromotedEventsComponent } from './views/my-past-promoted-events/my-past-promoted-events.component';
import { EventsIAmInterestedInAtendingComponent } from './views/events-i-am-interested-in-atending/events-i-am-interested-in-atending.component';

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
    setBackgroundImageDirective,
    AvailableEventsComponent,
    SideNavEnthusiastComponent,
    HeaderEnthusiastComponent,
    FooterLoggedComponent,
    HeaderPromoterComponent,
    SideNavPromoterComponent,
    MyCurrentPromotingEventsComponent,
    PromoteNewEventComponent,
    MyPastPromotedEventsComponent,
    EventsIAmInterestedInAtendingComponent,
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
    SocialLoginModule
  ],
  providers: [
    {
    provide: LOCALE_ID,
    useValue: "pt-BR"
    },
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' }
    },
    { provide: HTTP_INTERCEPTORS, useClass: EnthusiastJWtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: EnthusiastErrorInterceptor, multi: true },
    fakeAuthenticationBackendEnthusiastProvider,
    { provide: HTTP_INTERCEPTORS, useClass: PromoterJWtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: PromoterErrorInterceptor, multi: true },
    fakeAuthenticationBackendPromoterProvider,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('468463051684-577lmp0peueptu1gjagf5cutnd77403c.apps.googleusercontent.com')
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('797542117787307')
          }
        ]
      } as SocialAuthServiceConfig,
    }    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }












