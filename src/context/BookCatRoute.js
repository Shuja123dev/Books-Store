import React, { createContext, useState } from 'react'

const RouteContext = createContext();

const BookCatRoute = ({ children }) => {
    const [routeVal, setRouteVal] = useState();
    const [bookRoute, setBookRoute] = useState()
    return (
        <RouteContext.Provider value={{ routeVal, setRouteVal, bookRoute, setBookRoute }}>
            {children}
        </RouteContext.Provider>
    )
}

export default BookCatRoute
export { RouteContext }
