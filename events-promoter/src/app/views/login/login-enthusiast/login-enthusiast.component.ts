import { AuthenticationEnthusiastService } from './../../../controllers/authentication-enthusiast.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Enthusiast } from '../../../models/enthusiast.model';
import { EnthusiastService } from './../../../controllers/enthusiast.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login-enthusiast',
  templateUrl: './login-enthusiast.component.html',
  styleUrls: ['./login-enthusiast.component.css']
})
export class LoginEnthusiastComponent implements OnInit {

  enthusiast: Enthusiast = {

    username: "",
    password_enthusiast: "",

  }

  imageLink = "assets/img/background.png";

  constructor(private enthusiastService: EnthusiastService, private router: Router, private route: ActivatedRoute, private authenticationService: AuthenticationEnthusiastService) {

    if (this.authenticationService.currentUserValue) {

      this.router.navigate(['/home_enthusiast']);
    
    }

   }

  ngOnInit(): void { }

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



