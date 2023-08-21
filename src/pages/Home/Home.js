import React from 'react'
import Header from '../../Components/Header/Header'
import HeadLinks from '../../Components/HeadLinks/HeadLinks'
import Banner from '../../Components/Banner/Banner'
import ShopCatageory from '../../Components/ShopCatageory/ShopCatageory'

const Home = ({ booksArr }) => {
    return (
        <div>
            <Header />
            <HeadLinks />
            <Banner />
            <ShopCatageory booksArr={booksArr} />
        </div>
    )
}

export default Home
