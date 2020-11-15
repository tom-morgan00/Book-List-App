import React, { createContext, useEffect, useReducer } from 'react';
import { bookReducer } from '../reducers/bookReducer';

//This creates the book context that can be used in other components
export const BookContext = createContext();

//This component wraps child components, providing them with context
const BookContextProvider = (props) => {
  //Helper method to get local storage items
  const getLocalData = () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  };
  //This initialises the state of the app, bookReducer is used for the different dispatched actions, empty array is the state and getLocalData will check for local storage and update state with data
  const [books, dispatch] = useReducer(bookReducer, [], getLocalData);

  //runs when page loads and everytime books is changed
  useEffect(() => {
    //updates local storage with the books data
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  return (
    //Provider passes down value to hold state of all books and dispatch function for actions
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
