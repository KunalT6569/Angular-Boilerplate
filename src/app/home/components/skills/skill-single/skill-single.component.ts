import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-single',
  templateUrl: './skill-single.component.html',
  styleUrls: ['./skill-single.component.scss']
})
export class SkillSingleComponent implements OnInit {

    @Input() skill: any;

  constructor() { }

  ngOnInit(): void {
  }

  
}
