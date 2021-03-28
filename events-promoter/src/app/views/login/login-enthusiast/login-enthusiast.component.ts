import { AuthenticationEnthusiastService } from './../../../controllers/authentication-enthusiast.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enthusiast } from '../../../models/enthusiast.model';
import { EnthusiastService } from './../../../controllers/enthusiast.service';
import { first } from 'rxjs/operators';
import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-login-enthusiast',
  templateUrl: './login-enthusiast.component.html',
  styleUrls: ['./login-enthusiast.component.css']
})
export class LoginEnthusiastComponent implements OnInit {

  socialUser: SocialUser;

  isLoggedin: boolean;

  enthusiast: Enthusiast = {

    username: "",
    password_enthusiast: "",

  }

  imageLink = "assets/img/background.png";

  constructor(private enthusiastService: EnthusiastService, private router: Router, private authenticationService: AuthenticationEnthusiastService, private socialAuthService: SocialAuthService) {

    if (this.authenticationService.currentUserValue) {

      this.router.navigate(['/home_enthusiast']);

    }

  }

  ngOnInit() {

    this.socialAuthService.authState.subscribe((user) => {

      this.socialUser = user;

      this.isLoggedin = (this.socialUser != null);

      if (this.isLoggedin == true) {

        if ((this.authenticationService.loginSocial(this.socialUser.email, this.socialUser.firstName, this.socialUser.name) != null)) {

          this.router.navigate(["/home_enthusiast"]);

          this.enthusiastService.showMessage("Você entrou no sistema com sucesso!");

        } 
        
        else {

          this.enthusiastService.showMessage("Não foi possível fazer login no sistema! Username ou password incorretos!", true);

        }

      }

      console.log(this.socialUser);

    });

  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  loginWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  socialLogOut(): void {
    this.socialAuthService.signOut();
  }

  loginEnthusiast(): void {

    this.authenticationService.login(this.enthusiast.username, this.enthusiast.password_enthusiast)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(["/home_enthusiast"]);
          this.enthusiastService.showMessage("Você entrou no sistema com sucesso!");
        },
        error => {
          this.enthusiastService.showMessage("Não foi possível fazer login no sistema! Username ou password incorretos!", true);
        });

  }

  cancel(): void {

    this.router.navigate(["/login"]);

  }

}



