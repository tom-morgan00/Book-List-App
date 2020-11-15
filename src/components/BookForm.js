import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = (props) => {
  //useContext hooks allows dispatch method to be used from Book Context
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  //When form submits this callback is called to prevent default and dispatch an action
  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_BOOK', book: { title, author } });
    setTitle('');
    setAuthor('');
  };

  //These are controlled components where the input is updated onChange and value is stored
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input type="submit" value="add book" />
    </form>
  );
};

export default BookForm;
