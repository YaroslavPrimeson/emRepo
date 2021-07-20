import React, {useEffect, useState} from "react";
import InputNumber from '../Common/InputNumber'
import OldPrice from "../OldPrice";
import {useDispatch, useSelector} from "react-redux";
import {saveCart} from "../../store/Cart/actions";
import Labels from "../Labels";
import {showCart} from "../../store/Cart/actions";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'

import Button from "../Button";
import CardDescriptionBlock from '../CardDescriptionBlock'

const App = ({item = {}, openClose}) => {
    const [confirm, setConfirm] = useState(false);
    const arrowIcon = <FontAwesomeIcon icon={faArrowCircleRight}/>
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.cart)

    const [amount, setAmount] = useState(1)

    let price = item.price;

    if (amount > 99) {
        price = item.price100;
    } else if (amount > 29) {
        price = item.price30;
    } else if (amount > 9) {
        price = item.price10;
    } else if (amount > 4) {
        price = item.price5;
    } else if (amount > 2) {
        price = item.price3;
    } else {
        price = item.price
    }

    useEffect(() => {

        function escHandler(e) {
            if (e.keyCode === 27) {
                openClose(false)
            }
        }

        document.addEventListener("keyup", escHandler, false)
        return function cleanup() {
            document.removeEventListener("keyup", escHandler, false)
        }
    }, [openClose])


    const buyHandler = (data) => {
        item = cart.findIndex(el => {
            return el.item.id === data.item.id
        })

        if (item === -1) {
            cart.push(data)
        } else {
            cart[item].amount += data.amount
        }
        dispatch(saveCart([...cart]))
        setAmount(1)
        setConfirm(false)
    }

    return (
        <div className="CardBigContainer__wrapper overlay" onClick={(e) => {
            if (e.target.classList.contains("overlay")) {
                openClose(false);
            }
        }
        }>
            <div className={"CardBigContainer"}>
                {confirm && <div className="CardBigContainer__confirm">
                    <div className="CardBigContainer__confirm--title">
                        {`Желаете добавить товар в корзину?`}
                    </div>
                    <Button text={"Ok"} onClick={() => {
                        buyHandler({item, amount})
                    }}/>
                    <Button text={"Отмена"} onClick={() => setConfirm(false)}/>
                </div>}

                {/*<Cross className={"CardBigContainer__cross"} close={() => openClose(false)}/>*/}
                {/*<div className={'PathContainer'}>*/}
                {/*    <h3 className={'PathContainerHeader FontHeader2'}>Магазин</h3>*/}
                {/*</div>*/}
                <div className={'MainDoubleBlock'}>
                    <div className={'MainLeftBlock MainBlock'}>
                        <Labels sale={item?.actions?.sale}
                                newOne={item?.actions?.newOne}
                                hit={item?.actions?.hit}
                                recomend={item?.actions?.recomend}/>
                        <img className={'ProductImage'} src={item?.picture} alt=""/>
                    </div>
                    <div className={'MainRightBlock MainBlock'}>
                        <h3 className={"FontHeader3"}>{item?.title}</h3>
                        {item?.inStock === 0 && <p className={"FontText2 redText"}>Ожидаем</p>}
                        {item?.inStock === 1 && <p className={"FontText2 greenText"}>В наличии</p>}
                        {item?.inStock === 2 && <p className={"FontText2 yellowText"}>Под заказ 1-2 дня</p>}
                        <div className={'CoffeeInStock'}>
                            <h3>{price}₴</h3>&nbsp;
                            {item?.oldPrice && <OldPrice price={item?.oldPrice}/>}
                        </div>
                        <div className="coffeeOpt">
                            <div className={"coffeeOpt__title"}>Оптовые цены от:</div>
                            <div className={"coffeeOpt__prices"}>
                                <span className={"coffeeOpt__price"} onClick={() => setAmount(3)}>3 шт</span>
                                <span className={"coffeeOpt__price"} onClick={() => setAmount(5)}>5 шт</span>
                                <span className={"coffeeOpt__price"} onClick={() => setAmount(10)}>10 шт</span>
                                <span className={"coffeeOpt__price"} onClick={() => setAmount(30)}>30 шт</span>
                                <span className={"coffeeOpt__price"} onClick={() => setAmount(100)}>100 шт</span>
                            </div>
                        </div>

                        <form className={"BuyNow"} onSubmit={(e) => {
                            e.preventDefault();


                            setConfirm(true)
                        }}>
                            <InputNumber initialNumber={amount} onChange={setAmount}/>
                            <button type={'submit'}
                                    disabled={item?.inStock === 0}>{item?.inStock === 0 ? "Ожидаем" : "Купить"}</button>
                        </form>
                        {cart.find(el => item.id === el.item.id) && <div className={"ask"} onClick={() => {
                            openClose(false)
                            dispatch(showCart(true))
                        }
                        }>{arrowIcon} Перейти к корзине.</div>}
                        <CardDescriptionBlock item={item}/>
                    </div>
                </div>

            </div>
        </div>
    );
}


export default App