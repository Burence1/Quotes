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
    new Quote( 'Burens', 'If you set your goals ridiculously high and it is a failure, you will fail above everyone elses success.', 'James Cameron', 0, 0, new Date(2021, 1, 24)),
    new Quote( 'Burens', 'When you reach the end of your rope, tie a knot in it and hang on.', 'Franklin Roosevelt', 0, 0, new Date(2020, 2, 12)),
    new Quote( 'Burens','It is during our darkest moments that we must focus to see the light.','Aristostle',0,0,new Date(2020,10,2))
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
