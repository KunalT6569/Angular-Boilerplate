import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills = [
    { thumbnail: 'assets/images/js.png', name: 'JavaScript', level: 'EXPERT' },
    { thumbnail: 'assets/images/angular.svg', name: 'Angular', level: 'EXPERT' },
    { thumbnail: 'assets/images/node.png', name: 'Node.Js', level: 'EXPERT' },
    { thumbnail: 'assets/images/rxjs.svg', name: 'RxJs', level: 'EXPERT' },
    { thumbnail: 'assets/images/mongo.webp', name: 'MongoDB', level: 'INTERMEDIATE' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
