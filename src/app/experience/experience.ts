import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class ExperienceComponent 
{
job = 'Frontend Developer';
company = 'IT Company';
years = '2023–2025';
}
