import React, {useEffect, useState} from 'react';
import CartItem from "../CartItem"
import {useDispatch, useSelector} from "react-redux";
import Cross from "../Cross";
import Button from "../Button";
import {saveCart, showCart} from "../../store/Cart/actions";


const Index = ({basketItem}) => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.cart)

    const [confirm, setConfirm] = useState(false);

    const toOrder = () => {
        const order = {}
        order.items = cart.map(el => {
            return {
                id: el.id,
                amount: el.amount,
            }
        })
        order.total = total;
        setConfirm(false)
        dispatch(saveCart([]))
        dispatch(showCart(false))

    }

    useEffect(() => {
        function escHandler(e) {
            if (e.keyCode === 27) {
                dispatch(showCart(false))
            }
        }

        document.addEventListener("keyup", escHandler, false)
        return function cleanup() {
            document.removeEventListener("keyup", escHandler, false)
        }
    }, [dispatch])

    const total = cart.reduce((sum, elem) => {
        let price;
        // if (elem.amount > 99) {
        //     price = elem.price100;
        // } else if (elem.amount > 29) {
        //     price = elem.price30;
        // } else if (elem.amount > 9) {
        //     price = elem.price10;
        // } else if (elem.amount > 4) {
        //     price = elem.price5;
        // } else if (elem.amount > 2) {
        //     price = elem.price3;
        // } else {
        //     price = elem.price
        // }
        return sum + (price * elem?.amount)
    }, 0);
// const considerTotalSum = () =>{

    let consider
    basketItem.forEach(el => {
        consider += el.productPrice * el.quantity
    })

// }
    const deleteItemFromLocalStorage = ()=>{
        localStorage.removeItem('')
    }
    const test = ()=>{
        console.log("test")
    }
   useEffect(()=>{
       // console.log(consider)
   },[basketItem])
    /*************************************
     * RENDER
     ************************************/
    return (
        <div className={"cart__wrapper overlay"}>
            <div className={"cart"}>
                {confirm && <div className="cart__confirm">
                    <div className="cart__confirm--title">
                        {`Желаете подтвердить заказ на сумму ${total} гривен?`}
                    </div>
                    <Button text={"Ok"} onClick={toOrder}/>
                    <Button text={"Отмена"} onClick={() => setConfirm(false)}/>
                </div>}
                <Cross close={() => dispatch(showCart(false))} className={"cart__cross"}/>
                {/*<Cross close={test} className={"cart__cross"}/>*/}
                <div className="cart__title">Корзина</div>
                <div className="cart__content">
                    <div className="cart__headers"></div>
                    <div className="cart__headers">фото</div>
                    <div className="cart__headers">продукт</div>
                    <div className="cart__headers">вес</div>
                    <div className="cart__headers">количество</div>
                    <div className="cart__headers">цена</div>
                    <div className="cart__headers">общая сумма</div>
                </div>

                {/*{cart.map((item, index) => {*/}
                {basketItem.map((item, index) => {
                    return (
                        <CartItem  key={index} data={item}/>
                    )
                })}

                <div className="cart__footer">
                    <div className="cart__footer--button">
                        <Button className="cart__button" text={"Оформить заказ"}
                                onClick={() => setConfirm(true)}/>
                        {/*onClick={toOrder}/>*/}
                    </div>
                    <div className="cart__footer--total">
                        <span className="cart__footer--text">Итого:</span>
                        <span className="cart__footer--digit">{total}₴</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;