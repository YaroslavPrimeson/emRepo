import React, {useState} from 'react';
import ModalCard from "../ModalCard";
import Button from "../Button";

import StarsRate from '../Common/StarsRate'



const Card = ({item, handleAddGood}) => {
    const [showCard, setShowCard] = useState(false);


    const handleClick = () => {
        let basketLS = localStorage.getItem('shopBasket')
        let parsedLS = basketLS ? JSON.parse(basketLS) : []
        localStorage.setItem('shopBasket', JSON.stringify([...parsedLS, item]))
        handleAddGood(item)
    }
    return (
        <div className="card__wrapper">
            {showCard && <ModalCard item={item} openClose={setShowCard}/>}
            {/*<div className="card">*/}

            {/*    <div className="card__image">*/}
            {/*        <div className={'card__image__wrapper'}>*/}
            {/*            <img src={item?.picture} alt="item"/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="card__title">{item?.title}</div>*/}
            {/*    <div className="card__ratio"><StarsRate ratingProp={7}/></div>*/}
            {/*    <div className="card__oldPrice">{item?.oldPrice}{item?.oldPrice && "₴"}</div>*/}
            {/*    <div className="card__price"><span className="card__price--digits">{item?.price}</span>₴</div>*/}
            {/*    <div className="card__button">*/}
            {/*        <Button text={"Купить"} onClick={handleClick}/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default Card;
