import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Enthusiast } from '../../../models/enthusiast.model';
import { EnthusiastService } from './../../../controllers/enthusiast.service';

@Component({
  selector: 'app-registration-enthusiast',
  templateUrl: './registration-enthusiast.component.html',
  styleUrls: ['./registration-enthusiast.component.css']
})
export class RegistrationEnthusiastComponent implements OnInit {

  enthusiast: Enthusiast = {

    name_enthusiast: "",
    cpf: "",
    sex: "",
    birthDate: null,
    username: "",
    password_enthusiast: "",
    contactEmail: "",
    contactPhone: "",
    state: "",
    city: "",
    district: "",
    street: "",
    number_place: null,
    zipCode: ""

  }

  constructor(private enthusiastService: EnthusiastService, private router: Router) { }

  ngOnInit(): void {
  }

  createEnthusiast(): void {

    this.enthusiastService.create(this.enthusiast).subscribe(() => {
      this.enthusiastService.showMessage("Você foi cadastrado com sucesso!");
      this.router.navigate(["/login/enthusiast"]);
    });

  }

  cancel(): void {

    this.router.navigate(["/registration"]);
    
  }

}







