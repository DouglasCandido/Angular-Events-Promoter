import { Event } from '../../models/event.model';
import { EventService } from '../../controllers/event.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-event-delete',
  templateUrl: './event-delete.component.html',
  styleUrls: ['./event-delete.component.css']
})
export class EventDeleteComponent implements OnInit {

  event: Event = {

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

  data_full: string;

  data_formatada: string;

  constructor(private eventService: EventService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = +this.route.snapshot.paramMap.get("id");

    this.eventService.findOne(id).subscribe(event => {

      this.event = event;

      this.data_full = formatDate(this.event.eventDate, 'full', 'pt-BR', '-0300');

      this.data_formatada = new Date(formatDate(this.event.eventDate, 'medium', 'en-US', '-0600')).toISOString().slice(0,16);

      // console.log('Data e Hora em que o evento ocorrerá: ' + this.data_full);

    });

  }

  deleteEvent(): void {

    this.eventService.deleteOne(this.event.id).subscribe(() => {
      this.eventService.showMessage("Evento excluído com sucesso!");
      this.router.navigate(["/home_promoter/my_current_promoting_events"]);
    });

  }

  cancel(): void {

    this.router.navigate(["/home_promoter/my_current_promoting_events"]);

  }

}



