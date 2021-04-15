import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Promoter } from '../../../models/promoter.model';
import { AuthenticationPromoterService } from './../../../controllers/authentication-promoter.service';

@Component({
  selector: 'app-side-nav-promoter',
  templateUrl: './side-nav-promoter.component.html',
  styleUrls: ['./side-nav-promoter.component.css']
})
export class SideNavPromoterComponent implements OnInit {

  currentUser: Promoter;

  constructor(private router: Router, private authenticationService: AuthenticationPromoterService) { 

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


