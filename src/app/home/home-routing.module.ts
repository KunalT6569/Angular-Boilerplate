import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { IntroComponent } from './components/intro/intro.component';
import { MainComponent } from './components/main/main.component';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';
import { ProjectSingleComponent } from './components/my-projects/project-single/project-single.component';
import { SkillSingleComponent } from './components/skills/skill-single/skill-single.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WhatIDoComponent } from './components/what-i-do/what-i-do.component';
import { HomeComponent } from './home.component';

const importedDeclarations = [
  HomeComponent,
  MainComponent,
  IntroComponent,
  WhatIDoComponent,
  SkillsComponent,
  SkillSingleComponent,
  MyProjectsComponent,
  ProjectSingleComponent,
  AboutMeComponent,
];

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{ path: '', component: MainComponent }],
  },
];

@NgModule({
  declarations: [...importedDeclarations],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
