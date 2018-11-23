import { Component, OnInit, OnDestroy } from '@angular/core';
import { Quote } from './quotes.model';
import { QuoteService } from './quote.service';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit, OnDestroy {
  quotes: Quote[];
  private subscription: Subscription;

  constructor(private dataStorageService: DataStorageService, private quoteService: QuoteService) {}

  onGetData() {
    this.dataStorageService.getQuotes();
  }

  onQuoteAdded(quote: Quote) {
    this.quotes.push(quote);
    console.log(this.quotes);
  }

  ngOnInit() {
    this.dataStorageService.getQuotes();
    this.quoteService.quotesChanged
      .subscribe(
        (quotes: Quote[]) => {
          this.quotes = quotes;
        }
      );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
