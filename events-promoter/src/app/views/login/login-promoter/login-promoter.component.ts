import { PromoterService } from './../../../controllers/promoter.service';
import { Promoter } from './../../../models/promoter.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-promoter',
  templateUrl: './login-promoter.component.html',
  styleUrls: ['./login-promoter.component.css']
})
export class LoginPromoterComponent implements OnInit {

  promoter: Promoter = {

    username: "",
    password_promoter: "",

  }

  imageLink = "assets/img/background.png";

  constructor(private promoterService: PromoterService, private router: Router) { }

  ngOnInit(): void {
  }

  loginPromoter(): void {

    this.promoterService.login(this.promoter.username, this.promoter.password_promoter).subscribe(() => {
    this.promoterService.showMessage("Você entrou no sistema com sucesso!");
    this.router.navigate(["/home_promoter"]);
    });

  }

  cancel(): void {

    this.router.navigate(["/login"]);
    
  }

}


