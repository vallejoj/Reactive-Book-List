import React, { Component } from 'react';


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

    handleBookSubmit(){
  this.props.addBook ({
    title: this.state.bookTitle,
    author: this.state.bookAuthor
  });
  this.setState({
    newTitle : '',
    newAuthor : ''
  })
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

export default NewBookForm
