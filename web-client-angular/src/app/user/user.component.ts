import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { CommonModule } from '@angular/common';
import { FormServiceService } from '../form/form-service.service';
import { EventService } from '../../shared/EventService';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormComponent, RouterModule, CommonModule],
  templateUrl: './user.component.html',
  providers: [FormServiceService],
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  constructor(
    private formService: FormServiceService,
    private events: EventService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  SubmitDetails(e: any) {
    this.formService.addUser(e).subscribe({
      next: (data: any) => {
        this.events.emit('showModal', { message: data.message });
        this.router.navigate(['/', data.data._id]);
      },
      error: (err) => {
        this.events.emit('showModal', { message: err.message });
      },
    });
  }
}
