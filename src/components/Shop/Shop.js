import React, { useEffect, useState } from 'react';
import './Shop.css'
import Meals from './../Meals/Meals';
import Details from '../Details/Details';


const Shop = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, []);

    const [cart, setCart] = useState([]);

    const handleDetail = (props) => {
        // console.log('props from handle:', props.strMeal);
        // const newCart = [...cart, props];
        setCart([...cart, props.strMeal])
    }

    return (
        <div className='shop-section'>
            <div className='shop-meals'>
            {
                meals.map(x => <Meals z={x} key={x.idMeal} handleDetail={handleDetail}></Meals>)
            }
            </div>
            <div>
                <Details name={cart}></Details>
            </div>
        </div>
    );
};

export default Shop;