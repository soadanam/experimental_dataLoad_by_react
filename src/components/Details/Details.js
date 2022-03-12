import React from 'react';
import './Details.css';

const Details = (props) => {
    // console.log('Details Props:', props);

    return (
        <div className='detail-section'>
            <h2>You clicked:</h2>
            <h4>Name: {props.name + ''} </h4>
        </div>
    );
};

export default Details;