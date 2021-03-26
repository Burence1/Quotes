import { Quote } from './../../quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
   new Quote (1,'Burens','to finish, first finish', 'Burens',0,0),
   new Quote (2,'moringa','software dev', 'lawrence',0,0)
  ]

  i: any;

  quoteDelete(toDelete: any, index: number) {

    // if (toDelete){
    //   let remove = confirm(`Are you sure you want to delete ${this.quotes[index].text}?`)
  
    if (toDelete) {
      this.quotes.splice(index, 1);
    }
  }

  addNewQuote(quotes:any) {
    let quotesLength = this.quotes.length;
    quotes.id = quotesLength + 1;
    this.quotes.push(quotes)
  }

   constructor() { }

  ngOnInit(): void {
  }

}
