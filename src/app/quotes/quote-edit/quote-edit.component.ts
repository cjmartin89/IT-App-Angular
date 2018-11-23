import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from '../quotes.model';
import { QuoteService } from '../quote.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-quote-edit',
  templateUrl: './quote-edit.component.html',
  styleUrls: ['./quote-edit.component.css']
})
export class QuoteEditComponent implements OnInit {
  @Output() quoteAdded = new EventEmitter<Quote>();

  constructor(private quoteService: QuoteService, private dataService: DataStorageService) { }

  ngOnInit() {
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const person = value.person;
    const quote = value.quote;
    const newQuote = new Quote(person, quote);
    const newQuoteJSON = JSON.stringify(newQuote);
    this.dataService.storeQuotes(newQuote)
      .subscribe(
        (response) => console.log(response.status),
        (error) => console.log(error)
      );
  }

  onClearField() {
    console.log(`onClearField clicked`);
  }

}
