import React from 'react';
import BookList from './BookList'


const Book = (props) => {
  return (
    <div className="books-list_container">
      {
        props.books.map((books) => {
          return (
            <BookList
              title={books.title}
              author={books.author}
              key={books._id}
            />
          )
        })
      }
    </div>
  )
}


export default Book;
