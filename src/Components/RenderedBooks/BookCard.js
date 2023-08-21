import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { RouteContext } from '../../context/BookCatRoute'

const BookCard = ({ bookInfo }) => {
    const { routeVal, setBookRoute } = useContext(RouteContext)
    const handleClick = () => {
        setBookRoute(bookInfo.id)
    }
    return (
        <NavLink to={`/catageories/${routeVal}/${bookInfo.id}`}>
            <div className='book-card-container' onClick={handleClick}>
                <div className="book-card-box">
                    <img src={bookInfo.image} alt="" />
                    <div className="book-info">
                        <p className='book-title'>{bookInfo.name}</p>
                        <p className='author'>By: {bookInfo.author}</p>
                        <p></p>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default BookCard
