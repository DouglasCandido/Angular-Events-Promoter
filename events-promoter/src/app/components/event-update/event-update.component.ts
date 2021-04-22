import { Event } from '../../models/event.model';
import { EventService } from '../../controllers/event.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
  styleUrls: ['./event-update.component.css']
})
export class EventUpdateComponent implements OnInit {

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

  constructor(private eventService: EventService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = +this.route.snapshot.paramMap.get("id");

    this.eventService.findOne(id).subscribe(event => {
      this.event = event;
    });

  }

  updateEvent(): void {

    this.eventService.update(this.event).subscribe(() => {
      this.eventService.showMessage("Evento alterado com sucesso!");
      this.router.navigate(["/home_promoter/my_current_promoting_events"]);
    });

  }

  cancel(): void {

    this.router.navigate(["/home_promoter/my_current_promoting_events"]);

  }

}


