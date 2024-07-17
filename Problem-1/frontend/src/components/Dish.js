import React, { useState, useEffect } from 'react'
import axios from 'axios';
import DishCard from './DishCard';
import './Dish.css';

const Dish = () => {
    const [dishes, setDishes] = useState({});
    async function getDish() {
        let response = await axios.get('http://localhost:4444/get-dishes')
        setDishes(response.data);
        // console.log(dishes);
    }
    useEffect(() => {
         getDish();
        }, [])
        console.log(dishes);
        return (
			<div className="container">
                <h1 className="main-heading">My favorite Dishes</h1>
                <div className="dishes-container">
                    {dishes.map((dish) => {
                           if(dish.isPublished) return <DishCard dish={dish} key={dish.dishId} />
                    })}
                </div>
			</div>
		);
}

export default Dish