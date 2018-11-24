import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuotesComponent } from './quotes/quotes.component';
import { CommonModule } from '@angular/common';
import { QuoteService } from './quotes/quote.service';
import { HttpModule } from '@angular/http';
import { DataStorageService } from './shared/data-storage.service';
import { QuoteEditComponent } from './quotes/quote-edit/quote-edit.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './quotes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuotesComponent,
    QuoteEditComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpModule
  ],
  providers: [QuoteService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
