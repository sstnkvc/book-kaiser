import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  @Input() book: Book = {} as Book;
  @Output() onShowListEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  showBookList() {
    this.onShowListEvent.emit();
  }

  getStarsOnRating() {
    return new Array(this.book.rating);
  }
}
