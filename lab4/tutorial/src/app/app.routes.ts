import {Routes} from '@angular/router';
import {Home} from './home/home/home';
import {User} from './user/user';

export const routes: Routes = [
  {
    path: 'user',
    title: 'App User Page',
    component: User,
  },
];
