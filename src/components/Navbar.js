import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  //useContext hooks allows books to be used from Book Context
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Tom's Reading List</h1>
      <p>Currently you have {books.length} books to get through</p>
    </div>
  );
};

export default Navbar;
