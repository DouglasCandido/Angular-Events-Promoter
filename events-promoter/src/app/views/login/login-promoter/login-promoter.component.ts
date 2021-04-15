import { AuthenticationPromoterService } from './../../../controllers/authentication-promoter.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Promoter } from '../../../models/promoter.model';
import { PromoterService } from './../../../controllers/promoter.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login-promoter',
  templateUrl: './login-promoter.component.html',
  styleUrls: ['./login-promoter.component.css']
})
export class LoginPromoterComponent implements OnInit {

  isLoggedin: boolean;

  promoter: Promoter = {

    username: "",
    password_promoter: "",

  }

  imageLink = "assets/img/background.png";

  constructor(private promoterService: PromoterService, private router: Router, private authenticationService: AuthenticationPromoterService) {

    if (this.authenticationService.currentUserValue) {

      this.router.navigate(['/home_promoter']);

    }

  }

  ngOnInit() { }

  loginPromoter(): void {

    this.authenticationService.login(this.promoter.username, this.promoter.password_promoter)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(["/home_promoter"]);
          this.promoterService.showMessage("Você entrou no sistema com sucesso!");
        },
        error => {
          this.promoterService.showMessage("Não foi possível fazer login no sistema! Username ou password incorretos!", true);
        });

  }

  cancel(): void {

    this.router.navigate(["/login"]);

  }

}




