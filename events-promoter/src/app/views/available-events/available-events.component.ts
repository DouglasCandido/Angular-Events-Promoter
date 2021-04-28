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

  event: Event = {
    name_event: '',
    theme: '',
    state: '',
    city: '',
    zipCode: ''
  }

  displayedColumns = ["name_event", "description_event", "theme", "state", "city", "district", "street", "number_place", "zipCode", "latitude", "longitude", "site", "eventDate", "createdAt", "action"];

  constructor(private eventService: EventService) {



   }

  ngOnInit(): void {

    this.eventService.findAll().subscribe(
      events => {this.events = events}
    );

  }

  searchEventByName(): void {
    
    this.eventService.findAllByName(this.event.name_event).subscribe((eventos_encontrados) => {

      this.eventService.showMessage("Eventos encontrados com sucesso!");

      this.events = eventos_encontrados;

    });

  }

  searchEventByTheme(): void {
    
    this.eventService.findAllByTheme(this.event.theme).subscribe((eventos_encontrados) => {

      this.eventService.showMessage("Eventos encontrados com sucesso!");

      this.events = eventos_encontrados;

    });

  }

  searchEventByCity(): void {
    
    this.eventService.findAllByCity(this.event.city).subscribe((eventos_encontrados) => {

      this.eventService.showMessage("Eventos encontrados com sucesso!");

      this.events = eventos_encontrados;

    });

  }

  searchEventByState(): void {
    
    this.eventService.findAllByState(this.event.state).subscribe((eventos_encontrados) => {

      this.eventService.showMessage("Eventos encontrados com sucesso!");

      this.events = eventos_encontrados;

    });

  }

  searchEventByZipCode(): void {
    
    this.eventService.findAllByZipCode(this.event.zipCode).subscribe((eventos_encontrados) => {

      this.eventService.showMessage("Eventos encontrados com sucesso!");

      this.events = eventos_encontrados;

    });

  }

}

