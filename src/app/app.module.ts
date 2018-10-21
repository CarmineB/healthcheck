import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { MachineListComponent } from './machine-list/machine-list.component';
import { ModuleListComponent } from './module-list/module-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MachineListComponent,
    ModuleListComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
