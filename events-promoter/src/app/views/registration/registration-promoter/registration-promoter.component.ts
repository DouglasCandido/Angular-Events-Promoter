import { PromoterService } from './../../../controllers/promoter.service';
import { Promoter } from './../../../models/promoter.model';
import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-promoter',
  templateUrl: './registration-promoter.component.html',
  styleUrls: ['./registration-promoter.component.css']
})
export class RegistrationPromoterComponent implements OnInit {

  promoter: Promoter = {

    name_promoter: "",
    cnpj: "",
    sex: "",
    birthDate: null,
    username: "",
    password_promoter: "",
    contactEmail: "",
    contactPhone: "",
    state: "",
    city: "",
    district: "",
    street: "",
    number_place: null,
    zipCode: "",
    site: ""

  }

  constructor(private promoterService: PromoterService, private router: Router) { }

  ngOnInit(): void {
  }

  createPromoter(): void {

    this.promoterService.create(this.promoter).subscribe(() => {
    this.promoterService.showMessage("Você foi cadastrado com sucesso!");
    this.router.navigate(["/login/promoter"]);
    });

  }

  cancel(): void {

    this.router.navigate(["/registration"]);
    
  }

}



