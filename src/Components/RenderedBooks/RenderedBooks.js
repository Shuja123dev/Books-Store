import React from 'react'
import BookCard from './BookCard'
import './RenderedBooks.css'

const RenderedBooks = ({ catBooks }) => {
    const renderedBooks = catBooks.map((book) => {
        return <BookCard key={book.name} bookInfo={book} />
    })
    return (
        <div className='renderBooks-container'>
            {renderedBooks}
        </div>
    )
}

export default RenderedBooks
