import { combineReducers } from 'redux'

const rootReducer = combineReducers({// telling Redux to produce a reducer which will return state that has both a key of books with a value equal to the return value of `booksReducer()` and a key of authors with a value equal to the return value of `authorsReducer()`
  authors: authorsReducer,
  books: booksReducer 
})

export default rootReducer

// default state is set to empty array
function booksReducer(state = [], action) {
  let idx
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.book]

    case 'REMOVE_BOOK':
      idx = state.findIndex(book => book.id === action.id)
      return [...state.slice(0, idx), ...state.slice(idx + 1)]

    default:
      return state 
  }
}

// default state is set to empty array
function authorsReducer(state = [], action) {
  let idx
  switch (action.type) {
    case 'ADD_AUTHOR':
      return [...state, action.author]

    case 'REMOVE_AUTHOR':
      idx = state.findIndex(author => author.id === action.id)
      return [...state.slice(0, idx), ...state.slice(idx + 1)]

    case 'ADD_BOOK':
      let existingAuthor = state.filter(
        author => author.authorName === action.book.authorName 
      )
      if (existingAuthor.length > 0) {
        return state 
      } else {
        return [...state, {authorName: action.book.authorName, id: uuid()}]
      }

    default:
      return state 
  }
}