import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [MatSelectModule,BrowserAnimationsModule]
})
export class MaterialModule { }
