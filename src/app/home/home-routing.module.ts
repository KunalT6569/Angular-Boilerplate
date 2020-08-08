import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { IntroComponent } from './components/intro/intro.component';
import { MainComponent } from './components/main/main.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WhatIDoComponent } from './components/what-i-do/what-i-do.component';
import { HomeComponent } from './home.component';

const importedDeclarations = [HomeComponent, MainComponent, IntroComponent, WhatIDoComponent, SkillsComponent];

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
