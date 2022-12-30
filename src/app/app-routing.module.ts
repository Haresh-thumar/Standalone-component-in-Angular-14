import { DogsListComponent } from './dogs-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dogList' },
  { path: 'dogList', component: DogsListComponent },
  { path: 'details/:index', loadComponent: () => import('./dog-view.component').then(m => m.DogViewComponent) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
