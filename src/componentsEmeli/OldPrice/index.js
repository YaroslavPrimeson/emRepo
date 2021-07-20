import React from 'react';


const OldPrice = ({price}) => {

    return (
        <div className="oldPrice">
            <span className={"oldPriceText"}>{price}₴</span>
        </div>
    );
};

export default OldPrice;
