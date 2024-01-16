import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ViewComponent } from './user/view/view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', component: UserComponent },
  { path: ':id', component: ViewComponent },
  { path: '**', component: PageNotFoundComponent },
];
