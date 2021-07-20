import React, {useEffect} from 'react';
import InputNumber from "../Common/InputNumber";
import {saveCart} from "../../store/Cart/actions"
import {useDispatch, useSelector} from "react-redux";
import Cross from "../Cross";

const Cart = ({data,key}) => {
    const dispatch = useDispatch()
    const cart = useSelector(store => store.cart.cart)

    // let price = data.price;
    // if (data.amount > 99) {
    //     price = data.price100;
    // } else if (data.amount > 29) {
    //     price = data.price30;
    // } else if (data.amount > 9) {
    //     price = data.price10;
    // } else if (data.amount > 4) {
    //     price = data.price5;
    // } else if (data.amount > 2) {
    //     price = data.price3;
    // } else {
    //     price = data.price
    // }

    const totalPrice = data.productPrice * data.quantity;

    const onchangeHandler = (number) => {
        if (isNaN(number)) {
            number = 0;
        }

        const item = cart.findIndex(el => {
            return el.id === data.id
        })

        cart[item].amount = parseInt(number)
        dispatch(saveCart([...cart]))
    }
    const onRemoveHandler = () => {
        const newArr = cart.filter(el => {
            return el.id !== data.id
        })
        dispatch(saveCart([...newArr]))
    }

    /************************************
     * RENDER
     **************************************/
    return (
        <div key={key} className="cart__content cart__bordered">
            <div className="cart__data">
                <Cross className="cart__data--cross" close={onRemoveHandler}/>
            </div>
            <div className="cart__data">
                <img src={data?.productImage} alt=""/>
            </div>
            <div className="cart__data">{data?.productName}</div>
            <div className="cart__data">{data?.productWeight}</div>
            <div className="cart__data"><InputNumber onChange={onchangeHandler} name={"quantity"}
                                                     initialNumber={data?.quantity}/>
            </div>
            <div className="cart__data">{data?.productPrice}₴</div>
            <div className="cart__data">{totalPrice}₴</div>
        </div>
    );
};

export default Cart;
