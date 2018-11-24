import { Component, OnInit, EventEmitter, Output, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from '../quotes.model';
import { QuoteService } from '../quote.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Subscription } from 'rxjs';
import { Response } from '@angular/http';

@Component({
  selector: 'app-quote-edit',
  templateUrl: './quote-edit.component.html',
  styleUrls: ['./quote-edit.component.css']
})
export class QuoteEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') quoteForm: NgForm;
  @Output() quoteAdded = new EventEmitter<Quote>();
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Quote;

  constructor(private quoteService: QuoteService, private dataService: DataStorageService) { }

  onAddItem(form: NgForm) {
    const value = form.value;
    const person = value.person;
    const quote = value.quote;
    const newQuote = new Quote(person, quote, 0);
    if (this.editMode) {
      this.quoteService.updateQuote(this.editedItemIndex, newQuote)
        .subscribe(
          (response: Response) => {
            console.log(response);
          }
        );
      this.editMode = false;
      form.reset();
      this.dataService.getQuotes();
    } else {
      this.dataService.storeQuotes(newQuote)
      .subscribe(
        (response) => {
          console.log(response.status);
          if (response.status === 200) {
            console.log(`Response = 200`);
            this.dataService.getQuotes();
          }
        },
        (error) => console.log(error)
      );
    }
      form.reset();
  }

  onClear() {
    console.log(`Clear Clicked`);
    this.quoteForm.reset();
    this.editMode = false;
  }

  onDeleteQuote() {
    this.quoteService.deleteQuote(this.editedItemIndex)
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
      this.quoteForm.reset();
      this.dataService.getQuotes();
  }

  ngOnInit() {
    this.quoteService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.quoteService.getQuote(index);
          this.quoteForm.setValue({
            person: this.editedItem.person,
            quote: this.editedItem.quote
          });
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
