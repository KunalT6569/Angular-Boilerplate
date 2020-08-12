import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss'],
})
export class MyProjectsComponent implements OnInit {
  @Input() title = '';
  @Input() subTitle = '';
  @Input() projects;

  constructor() {}

  ngOnInit(): void {}
}
