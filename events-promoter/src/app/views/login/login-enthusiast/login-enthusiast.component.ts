import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enthusiast } from '../../../models/enthusiast.model';
import { EnthusiastService } from './../../../controllers/enthusiast.service';

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

  constructor(private enthusiastService: EnthusiastService, private router: Router) { }

  ngOnInit(): void {
  }

  loginEnthusiast(): void {

    this.enthusiastService.login(this.enthusiast.username, this.enthusiast.password_enthusiast).subscribe(() => {
    this.enthusiastService.showMessage("Você entrou no sistema com sucesso!");
    this.router.navigate(["/home_enthusiast"]);
    });

  }

  cancel(): void {

    this.router.navigate(["/login"]);
    
  }

}


