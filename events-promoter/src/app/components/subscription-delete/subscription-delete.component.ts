import { SubscriptionService } from './../../controllers/subscription.service';
import { Subscription } from './../../models/subscription.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-subscription-delete',
  templateUrl: './subscription-delete.component.html',
  styleUrls: ['./subscription-delete.component.css']
})
export class SubscriptionDeleteComponent implements OnInit {

  subscription: Subscription = {
    id: null,
    id_event: null,
    cpf_enthusiast: "",
    createdAt: null
  }

  data_full: string;

  data_formatada: string;

  constructor(private subscriptionService: SubscriptionService, private router: Router, private route: ActivatedRoute) { 



  }

  ngOnInit(): void {

    const id = +this.route.snapshot.paramMap.get("id");

    this.subscriptionService.findOne(id).subscribe(subscription => {

      this.subscription = subscription;

      this.data_full = formatDate(this.subscription.createdAt, 'full', 'pt-BR', '-0300');

      this.data_formatada = new Date(formatDate(this.subscription.createdAt, 'medium', 'en-US', '-0600')).toISOString().slice(0,16);

    }

    )

  }

  deleteSubscription(): void {

    this.subscriptionService.deleteOne(this.subscription.id).subscribe(() => {
      this.subscriptionService.showMessage("Inscrição cancelada com sucesso!");
      this.router.navigate(["/home_enthusiast/events_i_am_interested_in_atending"]);
    });

  }

  cancel(): void {

    this.router.navigate(["/home_enthusiast/events_i_am_interested_in_atending"]);

  }

}

