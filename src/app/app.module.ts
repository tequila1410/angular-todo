import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule, MatListModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ListService } from './list/list.service';
import {AppRoutingModule} from './app-routing.module';
import {ListComponent} from './list/list.component';
import {FormsModule} from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FilterPipe
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
