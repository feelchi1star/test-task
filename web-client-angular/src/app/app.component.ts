import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { EventService } from '../shared/EventService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HttpClientModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [HttpClient],
})
export class AppComponent {
  modalMessage = '';
  showAlert = false;

  constructor(private events: EventService) {
    this.events.listen('showModal', (data) => {
      this.showAlert = true;
      this.modalMessage = data.message;
      setTimeout(() => {
        this.closeAlert();
      }, 3000);
    });
  }

  closeAlert() {
    this.modalMessage = '';
    this.showAlert = false;
  }
}
