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
    { thumbnail: 'assets/images/typescript.webp', name: 'TypeScript', level: 'EXPERT' },
    { thumbnail: 'assets/images/unity.webp', name: 'Unity', level: 'EXPERT' },
    { thumbnail: 'assets/images/mongo.webp', name: 'MongoDB', level: 'INTERMEDIATE' },
    { thumbnail: 'assets/images/html.png', name: 'HTML', level: 'INTERMEDIATE' },
    { thumbnail: 'assets/images/scss.png', name: 'CSS/Scss', level: 'INTERMEDIATE' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
