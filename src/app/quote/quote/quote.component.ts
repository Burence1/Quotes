import { Quote } from './../../quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote( 'Burens', 'If you look at what you have in life, you will always have more.If you look at what you don not have in life, you will never have enough.', 'Oprah Winfrey', 0, 0, new Date(2021, 2, 27)),
    new Quote( 'Kevin', 'If you set your goals ridiculously high and it is a failure, you will fail above everyone elses success.', 'James Cameron', 0, 0, new Date(2021, 1, 24)),
    new Quote( 'Starford', 'When you reach the end of your rope, tie a knot in it and hang on.', 'Franklin Roosevelt', 0, 0, new Date(2020, 2, 12)),
    new Quote( 'Peter','It is during our darkest moments that we must focus to see the light.','Aristostle',0,0,new Date(2020,10,2))
  ]

  quoteDelete(toDelete: boolean, index: number) {

    var toDelete = confirm(`Do you wish to delete ${this.quotes[index].text}?`)
    if (toDelete == true) {
      this.quotes.splice(index, 1);
    } 
  }
  addNewQuote(quotes:any) {
    let quotesLength = this.quotes.length;
    quotes.id = quotesLength + 1;
    this.quotes.unshift(quotes)
  }

  first: any
  last: any
  count: any

  highestLikebtn() {
    this.first = 0
    this.last = 0

    for (this.count = 0; this.count < this.quotes.length; this.count++) {
      this.last = this.quotes[this.count].likes;
      if (this.last > this.first) { this.first = this.last }
    }
    return this.first
  }
  
   constructor() { }

  ngOnInit(): void {
  }

}
