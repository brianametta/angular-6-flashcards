import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';

import { AppComponent } from './app.component';
import { FlashCardComponent } from './flash-card/flash-card.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FlashCardService } from './flash-card/flash-card.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MaterialModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, FlashCardComponent, ToolbarComponent],
  bootstrap:    [ AppComponent ],
  providers: [FlashCardService]
})
export class AppModule { }
