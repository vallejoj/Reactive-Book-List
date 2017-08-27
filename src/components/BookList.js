import React from 'react';



  const BookList = ({ title, author }) => {
    return (
      <div className="author-list_item">
        <h2>{title}</h2>
        <p>{author}</p>
      </div>
    )
  }


export default BookList
