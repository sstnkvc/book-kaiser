import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  constructor(private bookStoreService: BookStoreService) {}
  booksArray: Book[] = [];

  @Output() onShowBookDetailsEvent = new EventEmitter<Book>();

  ngOnInit() {
    this.booksArray = this.bookStoreService.getAllBooks();
  }

  showBookDetails(selectedBook: Book) {
    this.onShowBookDetailsEvent.emit(selectedBook);
  }
}
