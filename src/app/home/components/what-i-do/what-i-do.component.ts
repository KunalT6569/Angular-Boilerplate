import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-i-do',
  templateUrl: './what-i-do.component.html',
  styleUrls: ['./what-i-do.component.scss'],
})
export class WhatIDoComponent implements OnInit {
  whatIDoList = [
    'FULL STACK DEVELOPER',
    'MEAN STACK DEVELOPER',
    'JAVASCRIPT DEVELOPER',
  ];

  currentWhatIDoListIndex = 0;

  timer: any = null;
  constructor() {}

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.setNextIndex();
    }, 2000);
  }

  setNextIndex() {
    this.currentWhatIDoListIndex++;
    if (this.currentWhatIDoListIndex >= this.whatIDoList.length) {
      this.currentWhatIDoListIndex = 0;
    }
  }
}
