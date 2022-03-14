import React, { useEffect, useState } from 'react';
import './Shop.css'
import Meals from './../Meals/Meals';
import Details from '../Details/Details';
import { renderIntoDocument } from 'react-dom/test-utils';


const Shop = () => {

    const [text, setText] = useState(['a']);
    // console.log('Text:', text);
    const handleSearch = (x) => {
        const inputText = x.target.value;
        setText(inputText);
    };


    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
            .then(res => res.json())
            .then(data => {
                if(data.meals.length > 0){
                    setMeals(data.meals)
                    setDisplayMeals(data.meals)
                }
            });
    }, [text]);


    const [cart, setCart] = useState([]);

    const handleDetail = (props) => {
        // const newCart = [...cart, props.strMeal];
        setCart([...cart, props.strMeal])
    };


    const [displayMeals, setDisplayMeals] = useState([]);
    const handleInput = (e) => {
        const searchText = e.target.value;
        const matchedText = meals.filter(x => x.strMeal.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayMeals(matchedText);
    };



    return (
        <div className='shop-section'>

            <div>
                <h1>Search by 'Wish':</h1>
                <input onChange={handleSearch} type="text" />
            </div>
            <div>
                <h1>Filter form this page:</h1>
                <input onChange={handleInput} type="text" />
            </div>

            <div>
                <div className='shop-meals'>
                    {
                        displayMeals.map(x => <Meals
                            z={x} key={x.idMeal} handleDetail={handleDetail} ></Meals>)
                    }
                </div>
                <div>
                    <Details name={cart}></Details>
                </div>
            </div>
        </div>
    );
};

export default Shop;