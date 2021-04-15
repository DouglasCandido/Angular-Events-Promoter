import { Promoter } from '../../models/promoter.model';
import { AuthenticationPromoterService } from './../../controllers/authentication-promoter.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-promoter',
  templateUrl: './home-promoter.component.html',
  styleUrls: ['./home-promoter.component.css']
})
export class HomePromoterComponent implements OnInit {

  currentUser: Promoter;

  constructor(private router: Router, private authenticationService: AuthenticationPromoterService) { 

    this.currentUser = this.authenticationService.currentUserValue;

    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

  }

  ngOnInit(): void {
  }

}

