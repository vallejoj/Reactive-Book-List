import React from 'react';



const BookFilterInput = ({filterInputChange})=>{

  return(
    <div className='book-filter'>
      <label htmlFor="book-filter"> Filter Books </label>
    <input type="text" onChange ={filterInputChange}/>
    </div>
  )
}



export default BookFilterInput
