import { Component } from '@angular/core';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [],
  templateUrl: './personal.html',
  styleUrl: './personal.css',
})
export class PersonalComponent 
{
name = 'Арина Балашова';
phone = '+380...';
city = 'Одесса';
email = 'arina@mail.com';
}
