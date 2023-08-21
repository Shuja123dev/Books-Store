import React from 'react'
import Header from '../../Components/Header/Header'
import HeadLinks from '../../Components/HeadLinks/HeadLinks'
import RenderedBooks from '../../Components/RenderedBooks/RenderedBooks'

const BookCatPage = ({ catBooks }) => {

    return (
        <>
            <Header />
            <HeadLinks />
            <RenderedBooks catBooks={catBooks.flat()} />
        </>
    )
}

export default BookCatPage
