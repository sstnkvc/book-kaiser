import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  book: Book;

  constructor(
    private bookStoreService: BookStoreService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const params = this.activatedRoute.snapshot.paramMap;
    const isbn = params.get('isbn');
    this.book = this.bookStoreService.getBookByISBN(isbn);
  }

  getStarsOnRating() {
    return new Array(this.book.rating);
  }
}
