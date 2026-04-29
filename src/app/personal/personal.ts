import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personal.html',
  styleUrls: ['./personal.css']
})
export class PersonalComponent {
  name = 'Арина Балашова';
  phone = '+380...';
  city = 'Одесса';
  email = 'arina@mail.com';

  isHighlighted = true;

  textColor = 'blue';
  fontSize = '20px';
}