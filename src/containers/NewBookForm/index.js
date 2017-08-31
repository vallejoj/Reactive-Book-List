import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getBooksFromFakeXHR} from '../../lib/books.db.js'
import {addBook} from '../../actions';

class NewBookForm extends Component{
    handleTitleChange(e){
      console.log('title log', e)
      this.setState({
        bookTitle: e.target.value
      })
    }

    handleAuthorChange(e){
      console.log('this is the author',e)
      this.setState({
        bookAuthor: e.target.value
      })
    }
  componentDidMount(){
    console.log('NEWBOOK CONTAINER',this.props)
  }

    handleBookSubmit(){
let newBook = {
    title: this.state.bookTitle,
    author: this.state.bookAuthor
  }

  this.props.addBook(newBook)
}

  render(){
    return(
    <div className="book-form">
            <input
              type="text"
              name="title"
              placeholder="Book Title"
              onChange={this.handleTitleChange.bind(this)}
            />
            <br />
            <input
              type="text"
              placeholder="Author"
              onChange={this.handleAuthorChange.bind(this)}
            />
            <br />
            <button onClick={this.handleBookSubmit.bind(this)}>Submit Book</button>
              </div>
  )
}
}
const mapDispatchToProps = (dispatch) =>{
  return{
    addBook:(book)=>{
      dispatch(addBook(book))
    }
  }
}

const connectedNewBookForm = connect(
  null,
  mapDispatchToProps
)(NewBookForm)

export default connectedNewBookForm
