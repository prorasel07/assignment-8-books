import React from 'react'
import ListedCard from './ListedCard'

const ReadBy = ({books}) => {
  return (
      <div className='space-y-5 mb-4 pt-5'>
      {books.map(book => <ListedCard key={book.bookId} book={book} />)}
         
          
    </div>
  )
}

export default ReadBy