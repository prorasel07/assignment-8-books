import React, { useEffect, useState }  from 'react';
import BookCard from '../Card/BookCard';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/Books.json')
            .then(res => res.json())
            .then(data => {
            setBooks(data)
        })
    }, [])


    return (
        <div className='container mx-auto px-4 sm:px-5 pt-10 mb-20'>
            <h2 className='font-bold text-4xl mt-8 text-center'>Books</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
            
                {books.map(book => (
                   <BookCard key={book.bookId} book={book} />
               )) }
           </div>
        </div>
        
    );
}

export default Books;
