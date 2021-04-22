import { EventService } from './../../controllers/event.service';
import { Event } from './../../models/event.model';
import { Component, OnInit } from '@angular/core';
import { AuthenticationPromoterService } from './../../controllers/authentication-promoter.service';
import { Promoter } from './../../models/promoter.model';

@Component({
  selector: 'app-my-current-promoting-events',
  templateUrl: './my-current-promoting-events.component.html',
  styleUrls: ['./my-current-promoting-events.component.css']
})
export class MyCurrentPromotingEventsComponent implements OnInit {

  currentUser: Promoter;

  events: Event[];

  displayedColumns = ["name_event", "description_event", "theme", "state", "city", "district", "street", "number_place", "zipCode", "latitude", "longitude", "site", "eventDate", "createdAt", "updatedAt", "action"];

  constructor(private eventService: EventService, private authenticationService: AuthenticationPromoterService) {

    this.currentUser = this.authenticationService.currentUserValue;

    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

  }

  ngOnInit(): void{

    this.eventService.findAllByCNPJ(this.currentUser.cnpj).subscribe(
      events => {this.events = events}
    );

  }

}




