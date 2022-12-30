import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { Dog, DogsService } from './dogs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dog-view',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="details-panel" *ngIf="(dog$ | async) as dog">
      <img class="main-img" src="{{dog.photoUrl}}" alt="Photo of {{dog.name}}">
      <article>
        <h1 class="main-text">Hi, I'm {{dog.name}}</h1>
        <h2>My owner's name is <span class="emphasize">{{dog.ownerName}}</span></h2>
        <p>{{dog.longDescription}}</p>
        <p>I live in <span class="emphasize">{{dog.location}}</span></p>
      </article>
    </article>
  `,
  styles: [`
  .details-panel {
    display: flex;
    padding: 30px;
    gap: 50px;
  }
  .main-img {
    border-radius: 10px;
    width: 400px;
  }
  h1 {
    color: orangeRed;
  }
  h1, h2, p {
    font-size: 16px;
    width: 600px;
    letter-spacing: 0.5px;
    font-family: arial;
    text-align: justify;
    text-justify: inter-word;
    line-height: 25px;
  }
  .main-text {
    font-size: 34pt;
    margin-bottom: 20px;
    letter-spacing: 0.5px;
    font-family: arial;
  }
  .emphasize {
    font-weight: bold;
    letter-spacing: 0.5px;
    font-family: arial;
  }
  `]
})
export class DogViewComponent implements OnInit {

  dog$!: Observable<Dog | undefined>;

  constructor(private dogService: DogsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dog$ = this.route.paramMap.pipe(map(params => {
      return this.dogService.dogs[Number(params.get('index'))]
    }))
  }

}
