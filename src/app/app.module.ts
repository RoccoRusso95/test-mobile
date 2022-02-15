import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { OnsenModule } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  imports: [BrowserModule, FormsModule, OnsenModule],
  declarations: [AppComponent, HelloComponent, DialogComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
