import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Dog } from './dogs.service';

@Component({
  selector: 'app-dogs-list-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  /********* HTML Part *********/
  template: `
  <article class="pet-card">
    <img class="pet-img" src="{{dog.photoUrl}}" alt="Photo of {{dog.name}}">
    <div class="pet-content">
      <p class="pet-headline">Meet <span class="pet-name">{{dog.name}}</span></p>
      <p class="pet-description">
        <span class="pet-name">{{dog.ownerName}}</span> wants you to know this about {{dog.name}}:{{dog.description}}
      </p>
      <p class="pet-learn-more"><a href="/details/{{index}}" target="_blank">Learn More</a></p>
    </div>
  <article>
`,
  /********* CSS Part *********/
  styles: [`
.pet-card {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  width: 350px;
}
.pet-content {
  padding: 0 25px 15px 15px;
}
.pet-img {
  border-radius: 10px 10px 0 0;
  width: 350px;
  height: 300px;
  object-fit: cover;
  background-size: cover;
}
.pet-name {
  font-weight: bolder;
  color: #EB455F;
}
.pet-description {
  padding-bottom: 20px!important;
}
.pet-description, .pet-headline, .pet-learn-more {
  font-size: 16px;
  letter-spacing: 0.5px;
  font-family: arial;
  text-align: justify;
  text-justify: inter-word;
  line-height: 25px;
}
.pet-learn-more a{
  background: #205295;
  padding: 10px;
  margin-top: 10px;
  color:#fff;
  border-radius: 5px;
  text-decoration: none;
}
.pet-headline {
  font-size: 18pt;
}
`]
})

/********* Logical Part *********/
export class DogsListCardComponent implements OnInit {

  @Input() dog!: Dog;
  @Input() index!: Number;

  constructor() { }

  ngOnInit(): void {
  }

}
