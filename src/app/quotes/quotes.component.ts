import { Component, OnInit, OnDestroy } from '@angular/core';
import { Quote } from './quotes.model';
import { QuoteService } from './quote.service';
import { DataStorageService } from '../shared/data-storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit, OnDestroy {
  quotes: Quote[];
  private subscription: Subscription;
  filteredStatus = '';

  constructor(private dataStorageService: DataStorageService, private quoteService: QuoteService) {}

  onGetData() {
    this.dataStorageService.getQuotes();
  }

  onQuoteAdded(quote: Quote) {
    this.quotes.push(quote);
    console.log(this.quotes);
  }

  refreshQuotes() {
    this.quoteService.quotesChanged
      .subscribe(
        (quotes: Quote[]) => {
          this.quotes = quotes;
        }
      );
  }

  onEditItem(index: number) {
    this.quoteService.startedEditing.next(index);
  }

  ngOnInit() {
    this.dataStorageService.getQuotes();
    this.refreshQuotes();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
