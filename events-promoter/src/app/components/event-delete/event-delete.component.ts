import { Event } from '../../models/event.model';
import { EventService } from '../../controllers/event.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-delete',
  templateUrl: './event-delete.component.html',
  styleUrls: ['./event-delete.component.css']
})
export class EventDeleteComponent implements OnInit {

  event: Event = {
    name_event: "",
    description_event: ""
  };

  constructor(private eventService: EventService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = +this.route.snapshot.paramMap.get("id");

    this.eventService.findOne(id).subscribe(event => {
      this.event = event;
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



