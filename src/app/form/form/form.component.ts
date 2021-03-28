import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Quote } from './../../quote'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  quoteForm = new FormGroup({
    name: new FormControl(''),
    text: new FormControl(''),
    author: new FormControl('')
  });

  @Output() addQuote = new EventEmitter<Quote>();
  newQuote = new Quote(0, "", "", "", 0, 0, new Date());
  submitQuote() {
    this.addQuote.emit({...this.newQuote});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
