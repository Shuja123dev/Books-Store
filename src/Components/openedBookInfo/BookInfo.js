import React from 'react'

const BookInfo = ({ book }) => {

    const selectedBook = book[0];
    return (
        <>
            <img src={selectedBook.image} alt="" />
            <p>{selectedBook.name}</p>
        </>
    )
}

export default BookInfo
