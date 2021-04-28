import { Subscription } from './../../models/subscription.model';
import { SubscriptionService } from './../../controllers/subscription.service';
import { AuthenticationEnthusiastService } from './../../controllers/authentication-enthusiast.service';
import { Enthusiast } from './../../models/enthusiast.model';
import { Component, OnInit } from '@angular/core';
import { EventService } from './../../controllers/event.service';
import { Event } from './../../models/event.model';

@Component({
  selector: 'app-events-i-am-interested-in-atending',
  templateUrl: './events-i-am-interested-in-atending.component.html',
  styleUrls: ['./events-i-am-interested-in-atending.component.css']
})
export class EventsIAmInterestedInAtendingComponent implements OnInit {

  currentUser: Enthusiast;

  subscriptions: Subscription[];

  displayedColumns = ["id_event", "createdAt", "action"];

  constructor(private subscriptionService: SubscriptionService, private authenticationService: AuthenticationEnthusiastService) {

    this.currentUser = this.authenticationService.currentUserValue;

    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

   }

  ngOnInit(): void {

    this.subscriptionService.findAllByCPF(this.currentUser.cpf).subscribe(inscricoes => 

      {

        this.subscriptions = inscricoes;

      }

    )

  }

}

