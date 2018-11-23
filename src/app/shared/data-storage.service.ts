import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { QuoteService } from '../quotes/quote.service';
import { Response } from '@angular/http';
import { Quote } from '../quotes/quotes.model';

@Injectable()
export class DataStorageService {

    constructor(private http: Http, private quoteService: QuoteService) {}

    storeQuotes(quote: Quote) {
           return this.http.post('http://localhost:3000/quotes', quote);
    }

    getQuotes() {
        this.http.get('https://calm-savannah-82295.herokuapp.com/quotes')
        .subscribe(
            (response: Response) => {
                const quotes: Quote[] = response.json();
                this.quoteService.setQuotes(quotes);
            }
        );
    }
}
