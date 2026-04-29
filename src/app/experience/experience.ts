import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.css']
  
})
export class ExperienceComponent 
{
job = 'Frontend Developer';
company = 'IT Company';
years = '2023–2025';
isImportant = true;
}
