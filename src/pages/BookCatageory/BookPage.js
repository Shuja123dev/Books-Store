import React, { useContext } from 'react'
import Header from '../../Components/Header/Header'
import HeadLinks from '../../Components/HeadLinks/HeadLinks'
import BookInfo from '../../Components/openedBookInfo/BookInfo'
import { RouteContext } from '../../context/BookCatRoute'

const BookPage = ({ catBooks }) => {
    const { bookRoute } = useContext(RouteContext);
    const book = catBooks.filter((book) => {
        if (book.id === bookRoute) {
            return { ...book }
        }
    })
    return (
        <>
            <Header />
            <HeadLinks />
            <BookInfo book={book} />
        </>
    )
}

export default BookPage
