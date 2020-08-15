import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  companies = [{
    logo: 'assets/images/instasolv.png',
    name: 'Adinio Services (InstaSolv)',
    duration: 'May 2020 - Today'
  }, {
    logo: 'assets/images/quovantis-logo.png',
    name: 'Quovantis',
    duration: 'Jul 2016 - May 2020'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
