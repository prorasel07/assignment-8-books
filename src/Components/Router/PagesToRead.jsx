import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
import { getReadBooks } from '../../utils';

const PagesToRead = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/Books.json')
      .then(res => res.json())
      .then(data => {
        const readList = getReadBooks();
        const filterBook = data?.filter(book => readList.includes(book.bookId))
        setBooks(filterBook)
    })  
  }, [])

  console.log()

  const options = {
    chart: {
      id: 'apexchart-example',
      toolbar: { show: false },
      stroke: {
        curve: 'smooth',
        // OR provide an array
        curve: ['monotoneCubic']
      }

    },
    xaxis: {
      categories: books.map(book => book.bookName)
    },
  }
 const  series = [{
    name: 'Page',
    data: books.map(book => book.totalPages) 
  }]

  return (
    <div className='max-w-7xl mx-auto  py-10 px-10'>
      <div>
      <Chart  options={options} series={series} type="bar" width={'100%'} height={320} />

      </div>
    </div>
  )
}

export default PagesToRead