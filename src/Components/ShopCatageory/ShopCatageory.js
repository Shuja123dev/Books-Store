import React, { useContext } from 'react'
import CatagoeryCard from './CatagoeryCard'
import './ShopCatageory.css'
import { RouteContext } from '../../context/BookCatRoute'

const ShopCatageory = ({ booksArr }) => {

    const { setRouteVal } = useContext(RouteContext)


    const handleCatClick = (type) => {
        // console.log(type)
        setRouteVal(type);
    }

    const renderedCatageories = booksArr.map((catageory) => {
        return <CatagoeryCard key={catageory.typeVal} onClick={() => handleCatClick(catageory.typeVal)} catageory={catageory} />
    })

    return (
        <div className='shop-catageory-container'>
            <h3>Shop By Catageory</h3>
            <div className="books-catageories">
                {renderedCatageories}
            </div>
        </div>
    )
}

export default ShopCatageory
