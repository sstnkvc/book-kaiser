import { Component } from '@angular/core';
import { Book } from './shared/book';
import { ViewState } from './shared/ViewState.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ViewState = ViewState;
  currentViewState: ViewState = ViewState.LIST;

  book: Book = {} as Book;
  title = 'book-kaiser';

  showBookList() {
    this.currentViewState = ViewState.LIST;
  }

  showBookDetails(selectedBook: Book) {
    this.book = selectedBook;
    this.currentViewState = ViewState.DETAILS;
  }
}
