import { Quote } from './../../quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  // quotes: Quote[]= [
  //   {text:'forever', author:'burens'}
  // ];

  // text: string;
  // author: string;

  quotes: Quote[] = [
   new Quote ('to finish, first finish', 'Burens'),
    // {text: 'forever' , author: 'watch'},
  ]

   constructor() { }

  ngOnInit(): void {
  }

}
