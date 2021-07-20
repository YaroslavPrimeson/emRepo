import React, {useEffect, useRef, useState} from 'react';
import Navigation from "../../componentsEmeli/Navigation";
import AddBasketComponent from '../../components/AddBasketComponent'
import ContactBlock from "../../components/ContactBlock";
import Footer from "../../components/Footer";
import CallBtn from "../../components/CallBtn";
import Lines from '../../components/Lines'
import CartList from "../../components/CartList";
import {useDispatch, useSelector} from "react-redux";
import Slider from '../../componentsEmeli/Slider'
import {saveCart} from "../../store/Cart/actions";
import Preloader from "../../components/Preloader/Preloader";
import {getCollection} from "../../Helper/adminHelper";
import {Carousel} from "react-bootstrap";
import photo from "../../Images/goods/3LAB.jpg"
import demoImgHair from "../../Images/top10hair/peptide.jpg";
import demoImgHair2 from "../../Images/top10hair/o.jpg";
import demoBody from "../../Images/top10body/large_body.png";
import demoBody2 from "../../Images/top10body/large_perfect_body.jpg";
import CardModal from "../../componentsEmeli/ModalCard/cardModal";

const demoStateHair = [
    {idPost: 0, category: "hair", title: "lorem ipsum dolor sit amet ", price: 1200, img: demoImgHair, quantity: 1},
    {idPost: 1, category: "hair", title: "lorem ipsum dolor sit amet ", price: 1100, img: demoImgHair2, quantity: 1},
    {idPost: 2, category: "hair", title: "lorem ipsum dolor sit amet ", price: 1400, img: demoImgHair, quantity: 1},
    {idPost: 3, category: "hair", title: "lorem ipsum dolor sit amet ", price: 1300, img: demoImgHair2, quantity: 1},
]

const demoStateBody = [
    {idPost: 0, category: "body", title: "lorem ipsum dolor sit amet ", price: 1200, img: demoBody},
    {idPost: 1, category: "body", title: "lorem ipsum dolor sit amet ", price: 1100, img: demoBody2},
    {idPost: 2, category: "body", title: "lorem ipsum dolor sit amet ", price: 1400, img: demoBody},
    {idPost: 3, category: "body", title: "lorem ipsum dolor sit amet ", price: 1300, img: demoBody2},
]


const Page = () => {
    const [coord, setCoord] = useState(0)
    const [addGoods, setAddGoods] = useState(null)
    const showCart = useSelector(state => state.cart.show)
    const dispatch = useDispatch()
    const showCartItem = useSelector(state => state.cart.cart)
    const [news, setNews] = useState([])
    const [items, setItems] = useState([])


    useEffect(() => {
        getCollection('goods')
            .then(r => {
                setItems(r)
            })
            .catch(e => console.log(e))
    }, [])

    useEffect(() => {
        setNews(items?.filter(el => el.productCategory === "Новинки"))
    }, [items])


    useEffect(() => {
        // console.log(showCartItem)
    }, [showCartItem])

    const handleAddGood = (item) => {
        let goods = {...item, 'amount': 1}
        setAddGoods(item)

        dispatch(saveCart([...showCartItem, goods]))
        // setBasketItem(localStorage.setItem("shopBasket"))

        setTimeout(
            () => setAddGoods(
                null
            ), 1000)
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setCoord(window.pageYOffset)
        })
        return window.removeEventListener('scroll', () => setCoord(window.pageYOffset + 80))
    }, [])
    /***************************************
     * Yaroslav
     ****************************************/
    const [basketItem, setBasketItem] = useState([])
    const [category, setCategory] = useState([]);
    const [goods, setGoods] = useState([]);
    const [showModalCard, setShowModalCard] = useState(false);
    const [currentModalItem,setCurrentModalItem] = useState();

    const handleModalCard = (item) => {
        setShowModalCard(!showModalCard)
        setCurrentModalItem(item)
    }

    const getCategories = () => {
        getCollection('categories').then(r => {
            setCategory(r)
        })
    }
    const getCollectionProduct = () => {
        getCollection('goods').then(r => {
            setGoods(r)
        })
    }
    useEffect(() => {
        getCategories()
        getCollectionProduct()
    }, []);
    useEffect(() => {
    }, [category, goods]);
    const addProductToBasket = (item) => {
        localStorage.setItem("basketShop", JSON.stringify(item))
        setBasketItem(prevState => [...prevState, item])
    }
    useEffect(() => {
        // console.log(basketItem)
    }, [basketItem])

    /************************************
     * RENDER
     **************************************/
    return (
        <div className="page">
            {/*<Preloader/>*/}
            {addGoods ? <AddBasketComponent item={addGoods}/> : <></>}
            {showModalCard ? <CardModal item={currentModalItem} /> : <></>}
            <Lines/>
            {showCart && <CartList basketItem={basketItem}/>}
            <Navigation variant={'main'}/>
            {/*<div className={"carousel__container"} >*/}
            {/*    <Carousel>*/}
            {/*        <Carousel.Item>*/}
            {/*            <img*/}
            {/*                className="d-block w-100"*/}
            {/*                src={photo}*/}
            {/*                alt="First slide"*/}
            {/*            />*/}
            {/*            <Carousel.Caption>*/}
            {/*            </Carousel.Caption>*/}
            {/*        </Carousel.Item>*/}
            {/*        <Carousel.Item>*/}
            {/*            <img*/}
            {/*                className="d-block  w-100"*/}
            {/*                src={photo}*/}
            {/*                alt="Second slide"*/}
            {/*            />*/}
            {/*            <Carousel.Caption>*/}
            {/*            </Carousel.Caption>*/}
            {/*        </Carousel.Item>*/}
            {/*        <Carousel.Item>*/}
            {/*            <img*/}
            {/*                className="d-block  w-100"*/}
            {/*                src={photo}*/}
            {/*                alt="Third slide"*/}
            {/*            />*/}
            {/*            <Carousel.Caption>*/}
            {/*            </Carousel.Caption>*/}
            {/*        </Carousel.Item>*/}
            {/*    </Carousel>*/}
            {/*</div>*/}

            {category.map(r => (
                    <>
                        <Slider
                            // header={'Новинки'}
                            header={r.categoryName}
                            // title={'в нашем магазине представлен кофе Premium и Speciality класса'}
                            handleAddGood={handleAddGood}
                            // items={news}
                            items={demoStateBody}
                            category={r}
                            handleModalCard={handleModalCard}
                            addProductToBasket={addProductToBasket}
                            // goods={goods.filter(el => el.productCategory === r.categoryName )}
                            goods={goods.filter(el => el.productCategory === r.categoryName)}
                        />
                    </>
                )
            )}

            {/*<Slider*/}
            {/*    header={'Новинки'}*/}
            {/*    // title={'в нашем магазине представлен кофе Premium и Speciality класса'}*/}
            {/*    handleAddGood={handleAddGood}*/}
            {/*    // items={news}*/}
            {/*    items={demoStateBody}*/}
            {/*/>*/}
            {/*<Slider*/}
            {/*    header={'Скидки'}*/}
            {/*    // title={'в нашем магазине представлен кофе Premium и Speciality класса'}*/}
            {/*    handleAddGood={handleAddGood}*/}
            {/*/>*/}
            {/*<Slider*/}
            {/*    header={'Популярное'}*/}
            {/*    // title={'в нашем магазине представлен кофе Premium и Speciality класса'}*/}
            {/*    handleAddGood={handleAddGood}*/}
            {/*/>*/}
            {/*<Slider*/}
            {/*    header={'Топ 10 для лица'}*/}
            {/*    // title={'в нашем магазине представлен кофе Premium и Speciality класса'}*/}
            {/*    handleAddGood={handleAddGood}*/}
            {/*/>*/}
            {/*<Slider*/}
            {/*    header={'Топ 10 для тела'}*/}
            {/*    // title={'в нашем магазине представлен кофе Premium и Speciality класса'}*/}
            {/*    handleAddGood={handleAddGood}*/}
            {/*/>*/}
            {/*<Slider*/}
            {/*    header={'Топ 10 для волос'}*/}
            {/*    // title={'в нашем магазине представлен кофе Premium и Speciality класса'}*/}
            {/*    handleAddGood={handleAddGood}*/}
            {/*/>*/}
            <ContactBlock/>
            <Footer/>
            <CallBtn/>
            {coord > 300 &&
            <div className="arrow__up">

            </div>}

        </div>
    )
}

export default Page;
