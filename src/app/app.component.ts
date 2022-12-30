import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <div>
        <a [routerLink]="['/']"><img class="logo" src="assets/dog-walker-logo.svg"></a>
        <h1 class="title">Walk My Dog</h1>
      </div>
    </nav>
    <hr>
    <router-outlet></router-outlet>
  `,
  styles: [`
   nav {
      display: flex;
      justify-content: space-between;
      margin: 20px 10px 10px 10px;
    }

    nav div.menu-items {
      display: flex;
      width: 10%;
      justify-content: space-between;
    }
    nav > div {
      display: flex;
    }
    .title {
      font-size: 25pt;
      color: #205295;
      margin: 0 0 0 15px!important;
    }
    .logo {
      height: 40px;
    }
  `]
})
export class AppComponent {
  title = 'standaloneComponent';
}
