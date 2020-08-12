import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-single',
  templateUrl: './project-single.component.html',
  styleUrls: ['./project-single.component.scss'],
})
export class ProjectSingleComponent implements OnInit {
  @Input() project: any;
  showDescription = false;
  constructor() {}

  ngOnInit(): void {}
}
