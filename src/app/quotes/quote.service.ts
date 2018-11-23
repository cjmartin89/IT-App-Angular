import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Quote } from './quotes.model';
import { Subject } from 'rxjs';


@Injectable()
export class QuoteService {
    quotesChanged = new Subject<Quote[]>();

    private quotes: Quote[] = [
    ];

    constructor (private http: Http) {}

    setQuotes(quotes: Quote[]) {
        this.quotes = quotes;
        this.quotesChanged.next(this.quotes.slice());
    }

    addQuote(newQuote: Quote) {
        this.quotes.push(newQuote);
    }

    // storeQuote() {
    //     return this.http.post('localhost:3000/quotes', this.quote);
    // }

    getQuotes() {
        return this.quotes.slice();
    }
}
