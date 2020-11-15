import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
  //useContext hooks allows books to be used from Book Context
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {
          //Transforms each book in the books array to a book details component
          books.map((book) => {
            return <BookDetails book={book} key={book.id} />;
          })
        }
      </ul>
    </div>
  ) : (
    <div className="empty">No books to read!</div>
  );
};

export default BookList;
