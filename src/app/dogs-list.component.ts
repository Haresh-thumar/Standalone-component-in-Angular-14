import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsService } from './dogs.service';
import { DogsListCardComponent } from './dogs-list-card.component';

@Component({
  selector: 'app-dogs-list',
  standalone: true,
  imports: [CommonModule, DogsListCardComponent],
  /********* HTML Part *********/
  template: `
    <section class="hero-section">
      <h2 class="hero-text">
        Discover Pets to walk near you
      </h2>
    </section>
    <article class="pet-list">
      <app-dogs-list-card *ngFor="let dog of dogsService.dogs; let i = index" [index]="i" [dog]="dog"></app-dogs-list-card>
    </article>
  `,
  /********* CSS Part *********/
  styles: [`
  .hero-text {
    font-size: 25pt;
    padding: 10px;
  }
  .pet-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 10px;
  }
  `]
})

/********* Logical Part *********/
export class DogsListComponent implements OnInit {

  constructor(readonly dogsService: DogsService) { }

  ngOnInit(): void {
  }

}
