import React, { Component } from 'react';
import './App.css';
import Book from '../../components/Book'
import BookFilterInput from '../../components/BookFilterInput'
import {connect} from 'react-redux'
import {getBooksFromFakeXHR,addBookToFakeXHR } from '../../lib/books.db'
import NewBookForm from '../NewBookForm/index.js'
import {loadBooks} from '../../actions'
class App extends Component {


  componentWillMount(){
    getBooksFromFakeXHR()
    .then((books)=>{
      this.props.loadBooks(books)
    })
    .catch((err)=>{
      console.log(err)
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
          <NewBookForm />
        <Book
          filter= {this.props.bookFilter}
        books={this.props.books}
      />

      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    books:state.books
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    loadBooks:(books)=>{
      dispatch(loadBooks(books));
    }
  }
}

const ConnectedApp = connect (
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectedApp;
