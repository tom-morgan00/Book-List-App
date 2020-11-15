import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ book }) => {
  //useContext hooks allows dispatch method to be used from Book Context
  const { dispatch } = useContext(BookContext);
  return (
    //When user clicks on a book, an action is dispatch to remove it from the UI
    <li onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookDetails;
