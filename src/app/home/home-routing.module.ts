import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const importedDeclarations = [HomeComponent];

const routes: Routes = [
    { path: '', component: HomeComponent, children: [] }
];

@NgModule({
  declarations: [...importedDeclarations],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
