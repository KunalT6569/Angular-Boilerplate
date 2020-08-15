import { Component, OnInit } from '@angular/core';

export interface Project {
  name: string;
  description: string;
  longDescription?: string;
  thumbnail: string;
  techStack?: Array<string>;
  duration?: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  professionalProjects: Project[] = [
    {
      name: 'InstaSolv',
      description: 'An education app used by millions of users',
      // tslint:disable-next-line: max-line-length
      // longDescription: 'Instasolv ( doubts clearing app ) is a questions solving app, maths app, educational app, learning app, free homework helper, exam preparing, maths questions solving app, find free instant English, Hindi, easy maths solutions & homework help in Hindi & English language.',
      thumbnail: 'assets/images/instasolv.jpg',
      duration: 'May 2020 - Today',
      techStack: [
        'JavaScript',
        'Node.Js',
        'Express',
        'Angular',
        'MongoDB',
        'RabbitMQ',
        'HTML',
        'Scss/CSS',
      ],
    },
    {
      name: 'Advent Health Partners',
      description: 'A health care provider company based in US',
      longDescription: '',
      thumbnail: 'assets/images/advent.png',
      duration: 'Feb 2018 - May 2020',
      techStack: [
        'JavaScript',
        'Angular',
        'Node.Js',
        'Express',
        'RxJs',
        'HTML',
        'Scss',
      ],
    },
    {
      name: 'Cadence',
      description:
        'A chat application that is being used inside the company for communication',
      longDescription: '',
      thumbnail: 'assets/images/cadence.png',
      duration: 'Jan 2017 - Feb 2018',
      techStack: ['JavaScript', 'Angular', 'Node.Js', 'Express', 'MongoDB'],
    },
    {
      name: 'Realty One Group',
      description: 'A portal that connects property dealers & buyers',
      longDescription: '',
      thumbnail: 'assets/images/rog.png',
      duration: 'Jul 2016 - Feb 2018',
      techStack: ['JavaScript', 'jQuery', 'HTML', 'CSS'],
    },
  ];

  personalProjects: Project[] = [
    {
      name: 'Blogs on medium.com',
      description:
        `Founded a medium publication <b><a href="https://medium.com/developers-arena" target="_blank">The Developer's Arena</a></b> with
          <br/>
          <br/>
          • <b>20k+ views/month</br>
          <br/>
          • <b>50+ technical blogs`,
      thumbnail: 'assets/images/medium-blogs.png',
      techStack: ['JavaScript', 'Node.Js', 'Express', 'Unity', 'HTML'],
    }, {
      name: 'knowledgescoops.com',
      description:
        `Created my personal blog <b><a href="https://knowledgescoops.com" target="_blank">knowledgescoops.com</a></b> on blogger with custom website theming and a lot of content`,
      thumbnail: 'assets/images/knowledgescoops.png',
      techStack: ['JavaScript', 'Node.Js', 'Express', 'Unity', 'HTML', 'CSS'],
    }, {
      name: 'Portfolio Website',
      description:
        `A portfolio website made in Angular 9 with the source code available on Github`,
      thumbnail: 'assets/images/portfolio.png',
      techStack: ['JavaScript', 'Angular', 'RxJs', 'Bulma', 'HTML', 'Scss'],
    }, {
      name: 'file-form-control-angular',
      description:
        `An <a href="https://www.npmjs.com/package/file-form-control-angular" target="_blank">npm package</a> that allows easily creating form controls for &lt;input type="file"/&gt;. A functionality missing in Angular.`,
      thumbnail: 'assets/images/npm-package.png',
      techStack: ['Angular', 'TypeScript', 'JavaScript'],
    }, {
      name: 'Looters',
      description:
        `An <a href="https://play.google.com/store/apps/details?id=com.deals.app" target="_blank">Android app</a> that lets users get the latest deals from online shopping websites like Flipkart & Amazon.`,
      thumbnail: 'assets/images/looters.png',
      techStack: ['JavaScript', 'NodeJs', 'MongoDB', 'Flutter', 'Firebase Firestore', 'Firebase Storage'],
    },
  ];


  constructor () { }

  ngOnInit(): void { }
}
