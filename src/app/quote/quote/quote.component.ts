import { Quote } from './../../quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
   new Quote (1,'to finish, first finish', 'Burens'),
  ]

  quoteDelete(toDelete: any, index: any) {
    if (toDelete) {
      this.quotes.splice(index, 1);
    }
  }

   constructor() { }

  ngOnInit(): void {
  }

}
