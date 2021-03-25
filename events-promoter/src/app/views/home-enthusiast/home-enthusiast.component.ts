import { Enthusiast } from '../../models/enthusiast.model';
import { AuthenticationEnthusiastService } from './../../controllers/authentication-enthusiast.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-enthusiast',
  templateUrl: './home-enthusiast.component.html',
  styleUrls: ['./home-enthusiast.component.css']
})
export class HomeEnthusiastComponent implements OnInit {

  currentUser: Enthusiast;

  constructor(private router: Router, private authenticationService: AuthenticationEnthusiastService) { 

    this.currentUser = this.authenticationService.currentUserValue;

    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

  }

  ngOnInit(): void { }

}

