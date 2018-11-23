import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { QuoteService } from '../quotes/quote.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    private subscription: Subscription;

    constructor(private dataStorageService: DataStorageService, private quoteService: QuoteService) {}

  @Output() featureSelected = new EventEmitter<string>();
    onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }
}
