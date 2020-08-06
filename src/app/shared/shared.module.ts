import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const importedDeclarations = [];

@NgModule({
  declarations: [...importedDeclarations],
  imports: [
    CommonModule
  ],
  exports: [...importedDeclarations]
})
export class SharedModule { }
