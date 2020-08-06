import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const importedDeclarations = [HeaderComponent, FooterComponent];

@NgModule({
  declarations: [...importedDeclarations],
  imports: [
    CommonModule
  ],
  exports: [...importedDeclarations]
})
export class SharedModule { }
