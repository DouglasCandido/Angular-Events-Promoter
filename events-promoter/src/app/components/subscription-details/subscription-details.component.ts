import { DatePipe, formatDate } from '@angular/common';
import { Event } from '../../models/event.model';
import { EventService } from '../../controllers/event.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription-details',
  templateUrl: './subscription-details.component.html',
  styleUrls: ['./subscription-details.component.css']
})
export class SubscriptionDetailsComponent implements OnInit {

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

  constructor(private eventService: EventService, private router: Router, private route: ActivatedRoute) { 



  }

  ngOnInit(): void {

    const id = +this.route.snapshot.paramMap.get("id_event");

    this.eventService.findOne(id).subscribe(event => {

    this.event = event;

    this.data_full = formatDate(this.event.eventDate, 'full', 'pt-BR', '-0300');

    this.data_formatada = new Date(formatDate(this.event.eventDate, 'medium', 'en-US', '-0600')).toISOString().slice(0,16);
      
  });

  }

  back(): void {

    this.router.navigate(["/home_enthusiast/events_i_am_interested_in_atending"]);

  }

}

