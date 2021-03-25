import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enthusiast } from '../../../models/enthusiast.model';
import { AuthenticationEnthusiastService } from './../../../controllers/authentication-enthusiast.service';

@Component({
  selector: 'app-side-nav-enthusiast',
  templateUrl: './side-nav-enthusiast.component.html',
  styleUrls: ['./side-nav-enthusiast.component.css']
})
export class SideNavEnthusiastComponent implements OnInit {

  currentUser: Enthusiast;

  constructor(private router: Router, private authenticationService: AuthenticationEnthusiastService) { 

    this.currentUser = this.authenticationService.currentUserValue;

    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

  }

  ngOnInit(): void {
  }

  logout() {

    this.authenticationService.logout();

    this.router.navigate(['/login']);
    
  }

}

