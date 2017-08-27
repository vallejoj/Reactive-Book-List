import React, { Component } from 'react';
import './App.css';
import Book from '../../components/Book'
import BookFilterInput from '../../components/BookFilterInput'
import BookList from '../../components/BookList'
import {getBooksFromFakeXHR,addBookToFakeXHR } from '../../lib/books.db'
import NewBookForm from '../NewBookForm/index.js'

class App extends Component {
  constructor(){
    super()
    this.state={
      books:[],
      bookFilter : ''
    }
  }

  componentDidMount(){
    getBooksFromFakeXHR()
    .then((books)=>{
      this.setState({
        books: books
      })
      console.log(books)
    })
  }

addBook(books){
  addBookToFakeXHR(books)
  .then(books =>{
    this.setState({
      books:books
    })
  })
}
handleFilterInputChange(e){
  this.setState({
    bookFilter:e.target.value
  })

}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src= "https://maxcdn.icons8.com/Share/icon/Printing//book1600.png"className="App-logo" alt="Books" />
          <h1>Welcome to the Bookdome</h1>
              <BookFilterInput filterInputChange = {this.handleFilterInputChange.bind(this)}/>
        </div>
          <NewBookForm addBook = {this.addBook.bind(this)}/>
        <Book
          filter= {this.state.bookFilter}
        books={this.state.books}
      />

      </div>
    );
  }
}

export default App;
