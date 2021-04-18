import { Promoter } from './../../models/promoter.model';
import { EventService } from './../../controllers/event.service';
import { Event } from './../../models/event.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationPromoterService } from './../../controllers/authentication-promoter.service';

@Component({
  selector: 'app-promote-new-event',
  templateUrl: './promote-new-event.component.html',
  styleUrls: ['./promote-new-event.component.css']
})
export class PromoteNewEventComponent implements OnInit {

  currentUser: Promoter;

  event: Event = {

    cnpj_promoter: "",
    name_event: "",
    description_event: "",
    theme: "",
    state: "",
    city: "",
    district: "",
    street: "",
    number_place: null,
    zipCode: "",
    latitude: null,
    longitude: null,
    site: "",
    eventDate: null

  }

  constructor(private eventService: EventService, private router: Router, private authenticationService: AuthenticationPromoterService) { 

    this.currentUser = this.authenticationService.currentUserValue;

    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

  }

  ngOnInit(): void {
  }

  createEvent(): void {
    
    this.eventService.create(this.event).subscribe(() => {
      this.eventService.showMessage("Evento criado com sucesso!");
      this.router.navigate(["/home_promoter/my_current_promoting_events"]);
    });

  }

  cancel(): void {

    this.router.navigate(["/home_promoter"]);
    
  }

}

