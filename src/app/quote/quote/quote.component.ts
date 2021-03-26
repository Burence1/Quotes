import { Quote } from './../../quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
   new Quote (1,'Burens','to finish, first finish', 'Burens'),
   new Quote (2,'moringa','software dev', 'lawrence' )
  ]

  i: any;

  quoteDelete(toDelete: any, index: number) {

    if (toDelete){
      let remove = confirm(`Are you sure you want to delete ${this.quotes[index].text}?`)
  
    if (remove) {
      this.quotes.splice(index, 1);
    }
  }}

  addNewQuote(quotes:any) {
    let quotesLength = this.quotes.length;
    quotes.id = quotesLength + 1;
    // quote.completeDate = new Date(quotes.completeDate)
    this.quotes.push(quotes)
  }

   constructor() { }

  ngOnInit(): void {
  }

}
