import { Routes } from '@angular/router';
import { StudentsComponent } from './students/students';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path: "student" , component: StudentsComponent,
    },
    {
        path: "home" , component: Home
    },
    {
        path: "" , redirectTo: "home", pathMatch: "full"
    }

];
