import React from 'react';
import './Meals.css';

const Meals = (props) => {
    // console.log('Props?', props)

    const { strMeal, idMeal, strArea, strMealThumb, strInstructions, strYoutube } = props.z;

    return (
        <div>
            <div className='meal-div'>
                <img src={strMealThumb} alt="" />
                <h2>{strMeal}</h2>
                <h4>{strArea}</h4>
                <h4>ID: {idMeal}</h4>
                <p>{strInstructions.slice(0, 120)}</p>
                <a href={strYoutube}> <button>YouTube</button></a>
                <button onClick={()=> props.handleDetail(props.z)}> <i className="fa-solid fa-binoculars"></i> Name!</button>
            </div>
        </div>
    );
};

export default Meals;