import { Component,inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class StudentsComponent {
  route = inject(RouterLink);
  
}
