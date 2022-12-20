import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  constructor() {}
  booksArray: Book[] = [];

  @Output() onShowBookDetailsEvent = new EventEmitter<Book>();

  ngOnInit() {
    this.initBooks();
  }

  showBookDetails(selectedBook: Book) {
    this.onShowBookDetailsEvent.emit(selectedBook);
  }

  initBooks() {
    this.booksArray = [
      {
        isbn: '9783864907791',
        title: 'Angular',
        authors: ['Ferdinand Malcher', 'Johannes Hoppe', 'Danny'],
        published: new Date(2020, 8, 1),
        subtitle: 'Grundlagen, fortgeschrittene Themen und Best Practises',
        rating: 5,
        thumbnails: [
          {
            url: 'https://cdn.ng-buch.de/cover/angular3.jpg',
            title: 'Buchcover',
          },
        ],
        description: 'Lernen Sie Angular mit diesem Praxisbuch!',
      },
      {
        isbn: '783864905520',
        title: 'React',
        authors: ['Oliver Zeigermann', 'Nils Hartmann'],
        published: new Date(2019, 2, 3),
        subtitle: 'Grundlagen, fortgeschrittene Techniken und Praxistipps',
        rating: 3,
        thumbnails: [
          {
            url: 'https://cdn.ng-buch.de/cover/react2.jpg',
            title: 'Buchcover',
          },
        ],
        description: 'Das bewährte und umfassende Praxisbuch zu React',
      },
    ];
  }
}
