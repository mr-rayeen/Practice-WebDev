import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';

const DishCard = ({ dish }) => {
    // const [published, setPublished] = useState(dish.isPublished);
    const card = useRef();

    async function toggle() {
        let response = await axios.post("http://localhost:4444/toggle", {
			dishId: dish.dishId,
		});
        // setPublished(response.data.dish.isPublished);
        card.current.style.display = "none";
        // console.log( response.data.dish.isPublished );
    }
  return (
		<div className="dish-card" ref={card} >
			<img src={dish.imageUrl} alt="Dish-Image" />
			<h4> {dish.dishName} </h4>
			<button onClick={toggle}>Toggle</button>
		</div>
  );
}

export default DishCard