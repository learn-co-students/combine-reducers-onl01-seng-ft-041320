import React, { Component } from 'react';
import AuthorInput from './components/AuthorInput';
import Authors from './components/Authors';
import BookInput from './components/BookInput';
import Books from './components/Books';


export class App extends Component {
  render() {
    console.log(this.props.store)
    return (
      <div className="App">
        <div>
          <h2>Authors</h2>
          <AuthorInput />
          <Authors />
        </div>
        <div>
          <h2>Book</h2>
          <BookInput />
          <Books />
        </div>
      </div>
    );
  }
};

export default App;
