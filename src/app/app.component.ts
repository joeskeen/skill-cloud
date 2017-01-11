import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Joe Skeen';

  skills: ISkill[] = [];
  selectedSkill: ISkill;

  newSkill() {
    const skill: ISkill = {};
    this.skills.push(skill);
    this.selectedSkill = skill;
  }

  reorder() {
    this.skills = this.skills.sort((a, b) => b.weight - a.weight);
  }
}

interface ISkill {
  name?: string;
  weight?: number;
  detail?: string;
}
