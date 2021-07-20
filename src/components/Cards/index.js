import React from 'react';
import Card from "../Card"


const Cards = ({items=[]}) => {

    return (
        <div className="cards">
            {items.map((item, index) => {
                return (<Card item={item} key={index}/>)
            })}
        </div>
    );
};

export default Cards;
