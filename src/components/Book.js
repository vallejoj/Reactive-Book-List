import React from 'react';
import BookList from './BookList'


const Book = (props) => {
  return (
    <div className="books-list_container">
      {
        props.books
        .filter(books =>{
          if(props.filter){
            return books.title.toLowerCase().indexOf(props.filter.toLowerCase())> -1
              || books.author.toLowerCase().indexOf(props.filter.toLowerCase())> -1

          }else{
            return books
          }
        })
        .map((books) => {
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
