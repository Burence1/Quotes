import { Quote } from './../../quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Burens', 'just Lift', 'Burens', 0, 0, new Date(2021, 2, 27)),
    new Quote(2, 'moringa', 'software dev', 'lawrence', 0, 0, new Date(2020, 3, 14))
  ]

  quoteDelete(toDelete: boolean, index: number) {

    var toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].text}?`)
    if (toDelete == true) {
      this.quotes.splice(index, 1);
    } 
  }
  addNewQuote(quotes:any) {
    let quotesLength = this.quotes.length;
    quotes.id = quotesLength + 1;
    this.quotes.push(quotes)
  }

  firstNo: number
  lastNo: number
  counter: number

  highestLikebtn() {
    this.firstNo = 0
    this.lastNo = 0

    for (this.counter = 0; this.counter < this.quotes.length; this.counter++) {
      this.lastNo = this.quotes[this.counter].likes;
      if (this.lastNo > this.firstNo) { this.firstNo = this.lastNo }
    }
    return this.firstNo
  }
  
   constructor() { }

  ngOnInit(): void {
  }

}
