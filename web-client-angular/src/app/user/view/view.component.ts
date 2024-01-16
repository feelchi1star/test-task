import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormServiceService } from '../../form/form-service.service';
import { FormComponent } from '../../form/form.component';
import { EventService } from '../../../shared/EventService';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule, FormComponent],
  templateUrl: './view.component.html',
  providers: [FormServiceService],
  styleUrl: './view.component.css',
})
export class ViewComponent implements OnInit {
  notfound = '';
  fetchData!: any;
  userId!: string;
  constructor(
    private routes: ActivatedRoute,
    private formService: FormServiceService,
    private events: EventService
  ) {}

  ngOnInit(): void {
    this.routes.params.subscribe({
      next: (params) => {
        const id = params['id'];
        if (!id) {
          this.notfound = 'Sorry Provide your ID';
        } else {
          this.userId = id;
          this.formService.getUser(id).subscribe({
            next: (value) => {
              this.fetchData = value;
            },
            error: (err) => {
              this.notfound = err.message;
            },
          });
        }
      },
      error(err) {
        console.log(err);
      },
    });
  }

  submitForm(e: any) {
    this.formService.updateUser(this.userId, e).subscribe({
      next: (value: any) => {
        this.events.emit('showModal', { message: value.message });
      },
      error: (err) => {
        this.events.emit('showModal', { message: err.message });
      },
    });
  }
}
