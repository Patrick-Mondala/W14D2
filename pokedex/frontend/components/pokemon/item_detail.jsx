import React from 'react';

export default ({item}) => {
    console.log("its kind of working!");
    console.log(item);
    return (
    <ul className='item-ul'>
        <li><h3>{item.name}</h3></li>
        <li>Price: ${item.price}</li>
        <li>Happiness: {item.happiness}</li>
    </ul>
)}