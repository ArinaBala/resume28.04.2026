import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PersonalComponent } from './personal/personal';
import { ExperienceComponent } from './experience/experience';
import { SkillsComponent } from './skills/skills';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PersonalComponent, ExperienceComponent, SkillsComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hw-28');
}
