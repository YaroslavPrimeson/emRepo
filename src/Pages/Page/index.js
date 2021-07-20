import React, {useEffect, useRef, useState} from 'react';
import Navigation from "../../components/Navigation";
import Top from "../../components/Top";
import Middle from "../../components/Middle";
import Description from "../../components/Description";
import VideoPlayer from "../../components/Video";
import AddBasketComponent from '../../components/AddBasketComponent'
import Mission from "../../components/Mission";
import Rekl from "../../components/Rekl";
import GalleryNew from "../../components/GalleryNew";
import ContactBlock from "../../components/ContactBlock";
import Footer from "../../components/Footer";
import CallBtn from "../../components/CallBtn";
import Lines from '../../components/Lines'
import CartList from "../../components/CartList";

import {useDispatch, useSelector} from "react-redux";
import Slider from '../../components/Slider'
import {saveCart} from "../../store/Cart/actions";
import Preloader from "../../components/Preloader/Preloader";

const Page = () => {
    const [coord, setCoord] = useState(0)

    const [addGoods, setAddGoods] = useState(null)
    const showCart = useSelector(state => state.cart.show)
    const dispatch = useDispatch()
    const showCartItem = useSelector(state => state.cart.cart)

    useEffect(() => {
        // console.log(showCartItem)
    }, [showCartItem])
    const handleAddGood = (item) => {
        let goods = {...item, 'amount': 1}
        setAddGoods(item)

        dispatch(saveCart([...showCartItem, goods]))

        setTimeout(
            () => setAddGoods(
                null
            ), 2000)
    }


    useEffect(() => {
        window.addEventListener('scroll', () => {
            setCoord(window.pageYOffset)
        })
        return window.removeEventListener('scroll', () => setCoord(window.pageYOffset + 80))
    }, [])

    return (
        <div className="page">
            <Preloader/>
            {addGoods ? <AddBasketComponent item={addGoods}/> : <></>}
            <Lines/>
            {showCart && <CartList/>}
            <Navigation variant={'main'}/>
            <Top/>
            <Middle/>
            <Description/>
            <VideoPlayer/>
            <Slider handleAddGood={handleAddGood}/>
            <Mission/>
            <Rekl/>
            <GalleryNew/>
            <ContactBlock/>

            <Footer/>
            <CallBtn/>
            {coord > 300 &&
            <div className="arrow__up">
                <a href="#main">
                    <div className="arrow__up__icon"></div>
                </a>
            </div>}

        </div>
    )
}

export default Page;
