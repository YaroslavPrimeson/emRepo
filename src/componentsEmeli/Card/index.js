import React, {useEffect, useState} from 'react';
import ModalCard from "../ModalCard";
import Button from "../Button";

import StarsRate from '../Common/StarsRate'
import {logDOM} from "@testing-library/react";
import CardModal from "../ModalCard/cardModal";


const Card = ({handleModalCard,index, item, handleAddGood, addProductToBasket}) => {

    /**************************************************
     * STATE
     **************************************************/

    const handleClick = () => {
        // let basketLS = localStorage.getItem('shopBasket')
        // let parsedLS = basketLS ? JSON.parse(basketLS) : []
        // localStorage.setItem('shopBasket', JSON.stringify([...parsedLS, item]))
        handleAddGood(item)
        addProductToBasket(item)
    }
    // useEffect(()=>{
    //     console.log(activeCard)
    // },[])
    // idPost: "Tz8m1cRMTgyk2hELsxKU"
    // productCategory: "Новинки"
    // productDescription: "Эта штука - огонь!"
    // productImage: "https://firebasestorage.googleapis.com/v0/b/emeli-beauty.appspot.com/o/1622026234985-new-prod.png?alt=media&token=e1643a73-c0fa-4735-9888-445dbd310d36"
    // productName: "Facer"
    // productPrice: "33333"
    // productSubCategory: ["Лицо"]

    /**************************************************
     * RENDER
     **************************************************/
    return (
        <>
            <div className="card__wrapper" key={item?.idPost} onClick={()=>handleModalCard(item)}>
                <div className="card ">
                    <div className="card__image">
                        <div className={'card__image__wrapper'}>
                            <img src={item?.productImage} alt="item"/>
                        </div>
                    </div>
                    <div className="card__title">{item?.productName}</div>
                    {/*<div className="card__ratio"><StarsRate ratingProp={7}/></div>*/}
                    <div className="card__title">{item?.productDescription}</div>
                    {/*<div className="card__oldPrice">{item?.oldPrice}{item?.oldPrice && "₴"}</div>*/}
                    <div className="card__price">
                        <span className="card__price--digits">{item?.productPrice}</span>
                        ₴
                    </div>
                    <div className="card__button">
                        <Button
                            text="Купить"
                            // onClick={handleClick}
                            onClick={handleClick}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
