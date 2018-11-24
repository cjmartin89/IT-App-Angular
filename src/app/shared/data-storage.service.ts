import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { QuoteService } from '../quotes/quote.service';
import { Response } from '@angular/http';
import { Quote } from '../quotes/quotes.model';

@Injectable()
export class DataStorageService {

    constructor(private http: Http, private quoteService: QuoteService) {}

    baseUrl = 'https://calm-savannah-82295.herokuapp.com/quotes';

    storeQuotes(quote: Quote) {
           return this.http.post(this.baseUrl, quote);
    }

    getQuotes() {
        this.http.get(this.baseUrl)
        .subscribe(
            (response: Response) => {
                const quotes: Quote[] = response.json();
                this.quoteService.setQuotes(quotes);
            }
        );
    }

    // deleteQuote(pk: number) {
    //     const url = this.baseUrl + '/' + pk;
    //     this.http.delete(url);
    // }
}
