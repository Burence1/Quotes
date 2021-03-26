import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from './../../quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quotes: Quote;
  @Output() toDelete = new EventEmitter<boolean>();

  deleteQuote(del: boolean) {
    this.toDelete.emit(del);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
