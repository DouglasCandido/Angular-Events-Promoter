import { SubscriptionService } from './../../controllers/subscription.service';
import { PromoterService } from './../../controllers/promoter.service';
import { Promoter } from './../../models/promoter.model';
import { Subscription } from './../../models/subscription.model';
import { AuthenticationEnthusiastService } from './../../controllers/authentication-enthusiast.service';
import { Enthusiast } from './../../models/enthusiast.model';
import { EventService } from './../../controllers/event.service';
import { Event } from './../../models/event.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-subscribe',
  templateUrl: './event-subscribe.component.html',
  styleUrls: ['./event-subscribe.component.css']
})
export class EventSubscribeComponent implements OnInit {

  currentUser: Enthusiast;

  promoter: Promoter = {
    name_promoter: "",
    cnpj: ""
  }

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

  subscription: Subscription = {

    id_event: null,
    cpf_enthusiast: ""

  }

  constructor(private subscriptionService: SubscriptionService, private eventService: EventService, private promoterService: PromoterService, private router: Router, private authenticationService: AuthenticationEnthusiastService) { 

    this.currentUser = this.authenticationService.currentUserValue;

    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

  }

  ngOnInit(): void {

    

  }

  subscribeForTheEvent(): void {
    
    this.subscriptionService.subscribe(this.subscription).subscribe(() => {
      this.eventService.showMessage("Você se inscreveu no evento com sucesso!");
      this.router.navigate(["/home_enthusiast/events_i_am_interested_in_atending"]);
    });

  }

  cancel(): void {

    this.router.navigate(["/home_enthusiast/available_events"]);
    
  }

}

