import { v4 as uuid } from 'uuid';

//This is the book reducer which controls the state and changes depending on the action passed in
export const bookReducer = (state, action) => {
  switch (action.type) {
    //ADD book to state
    case 'ADD_BOOK':
      const { title, author } = action.book;
      return [
        ...state,
        {
          title,
          author,
          id: uuid(),
        },
      ];
    //REMOVE book from state
    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
