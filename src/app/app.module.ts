import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListService } from './list/list.service';
import {AppRoutingModule} from './app-routing.module';
import {ListComponent} from './list/list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule, MatListModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
