import { formatDate } from '@angular/common';
import { SubscriptionService } from './../../controllers/subscription.service';
import { PromoterService } from './../../controllers/promoter.service';
import { Promoter } from './../../models/promoter.model';
import { Subscription } from './../../models/subscription.model';
import { AuthenticationEnthusiastService } from './../../controllers/authentication-enthusiast.service';
import { Enthusiast } from './../../models/enthusiast.model';
import { EventService } from './../../controllers/event.service';
import { Event } from './../../models/event.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnChanges } from '@angular/core';

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
  };

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

  };

  subscription: Subscription = {

    id_event: null,
    cpf_enthusiast: ""

  };

  subscription_integrity: Subscription = {

    id_event: null,
    cpf_enthusiast: ""

  }

  cpf_enthusiast: string;

  id: number;

  data_full: string;

  data_formatada: string;

  constructor(private subscriptionService: SubscriptionService, private eventService: EventService, private promoterService: PromoterService, private router: Router, private authenticationService: AuthenticationEnthusiastService, private route: ActivatedRoute) { 

    this.currentUser = this.authenticationService.currentUserValue;

    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

    this.cpf_enthusiast = this.currentUser.cpf;

  }

  ngOnInit(): void {

    this.subscription.cpf_enthusiast = this.cpf_enthusiast;

    this.id = +this.route.snapshot.paramMap.get("id");

    this.subscription.id_event = this.id;

    this.eventService.findOne(this.id).subscribe(event => {

      this.event = event

      this.data_full = formatDate(this.event.eventDate, 'full', 'pt-BR', '-0300');

      this.data_formatada = new Date(formatDate(this.event.eventDate, 'medium', 'en-US', '-0600')).toISOString().slice(0,16);

      this.promoterService.findOne(this.event.cnpj_promoter).subscribe(promoter => {

        this.promoter = promoter;

      });

    });

  }

  subscribeForTheEvent(): void {

    this.subscription.cpf_enthusiast = this.cpf_enthusiast;

    this.subscriptionService.findOneByCPFAndIDEvent(this.subscription).subscribe((subscription_encontrada) => {

      this.subscription_integrity = subscription_encontrada;

      if((this.subscription_integrity != null)) {

        this.subscriptionService.showMessage("Você já está inscrito nesse mesmo evento!", true);
  
        this.router.navigate(["/home_enthusiast/events_i_am_interested_in_atending"]);
  
      } 
      
      else {

        this.subscriptionService.subscribe(this.subscription).subscribe(() => {

          this.subscriptionService.showMessage("Você se inscreveu no evento com sucesso!");
  
          this.router.navigate(["/home_enthusiast/events_i_am_interested_in_atending"]);
  
        });

      }

    });

  }

  cancel(): void {

    this.router.navigate(["/home_enthusiast/available_events"]);
    
  }

}

