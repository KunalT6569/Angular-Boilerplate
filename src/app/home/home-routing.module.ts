import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './home.component';

const importedDeclarations = [HomeComponent, MainComponent];

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{ path: '', component: MainComponent }],
  },
];

@NgModule({
  declarations: [...importedDeclarations],
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
