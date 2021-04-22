import { EventService } from './../../controllers/event.service';
import { Event } from './../../models/event.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-available-events',
  templateUrl: './available-events.component.html',
  styleUrls: ['./available-events.component.css']
})
export class AvailableEventsComponent implements OnInit {

  events: Event[];

  displayedColumns = ["name_event", "description_event", "theme", "state", "city", "district", "street", "number_place", "zipCode", "latitude", "longitude", "site", "eventDate", "createdAt", "action"];

  constructor(private eventService: EventService) {



   }

  ngOnInit(): void {

    this.eventService.findAll().subscribe(
      events => {this.events = events}
    );

  }

}

