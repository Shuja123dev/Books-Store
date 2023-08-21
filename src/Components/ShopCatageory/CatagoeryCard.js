import React from 'react'
import { NavLink } from 'react-router-dom';

const CatagoeryCard = ({ catageory, onClick }) => {
    const handleCatClick = () => {
        onClick();
    }
    return (
        <NavLink to={`/catageories/${catageory.typeVal}`}>
            <div onClick={handleCatClick} className='catageory-card' style={{ backgroundColor: catageory.bgColor }}>
                <div className="inner-cat-card">
                    <img src={catageory.image} alt="" />
                    <div className="card-info">
                        <h4>{catageory.type}</h4>
                        <button className='primary outlined card-btn'>See More</button>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default CatagoeryCard
