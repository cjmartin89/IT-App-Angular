import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Quote } from './quotes.model';
import { Subject } from 'rxjs';

@Injectable()
export class QuoteService {
    quotesChanged = new Subject<Quote[]>();
    startedEditing = new Subject<number>();

    baseUrl = 'https://calm-savannah-82295.herokuapp.com/quotes';

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

    getQuotes() {
        return this.quotes.slice();
    }

    getQuote(index: number) {
        return this.quotes[index];
    }

    updateQuote(index: number, newQuote: Quote) {
        const quoteToUpdate = this.quotes[index];
        const pk = quoteToUpdate.pk;
        const url = this.baseUrl + '/' + pk + '/';
        return this.http.put(url, newQuote);
    }

    deleteQuote(index: number) {
        const quoteToDelete = this.quotes[index];
        const pk = quoteToDelete.pk;
        const url = this.baseUrl + '/' + pk + '/';
        return this.http.delete(url);
    }
}
