import React, {useCallback, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import Card from "../Card";
import {Swiper, SwiperSlide} from "swiper/react";
import {useInView} from "react-intersection-observer";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import Media from 'react-media'
import SwiperCore, {Pagination, Navigation} from 'swiper/core';
import HeaderBlock from "../HeaderBlock";
import {getCollection} from "../../Helper/adminHelper";
// import Svg from "../Svg/Svg";
// import Roster from "../Svg/Roster";
// import CoffeeCap from "../Svg/CoffeeCap";

SwiperCore.use([Pagination, Navigation]);


export default function App({handleModalCard,handleAddGood, header, title, items = [],category,goods,addProductToBasket}) {

    const [ref, inView] = useInView({
        rootMargin: '-300px 0px',
    });
    const [stateProduct, setStateProduct] = useState([]);
    const getCollectionNew = () => {
        getCollection('goods').then(r => {
            setStateProduct(r.filter(el => el.productCategory === "Новинки"))

        })
    }
    useEffect(() => {
        getCollectionNew()

    }, [])
    useEffect(()=>{
        // console.log(goods)
    // },[stateProduct,category,goods])
    },[category,goods])
    /*********************************
     * RENDER
     ***********************************/
    return (
        <div className={'slider__wrapper'}
             ref={ref}
             data-inview={inView}
        >
            <HeaderBlock title={header} subtitle={title}/>
            <Media queries={{
                small: "(max-width: 767px)",
                medium: "(min-width: 768px) and (max-width: 1023px)",
                large: "(min-width: 1024px)"
            }}>
                {matches => (
                    <div className="description__body">
                        {!matches.small &&
                        <>
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                slidesPerGroup={1}
                                loop={true}
                                loopFillGroupWithBlank={true}
                                navigation={true}
                                className="mySwiper"
                            >
                                {goods?.map((el,index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <Card handleModalCard={handleModalCard} index={index} addProductToBasket={addProductToBasket} item={el} handleAddGood={handleAddGood}/>
                                            </SwiperSlide>
                                        )
                                    }
                                )}
                            </Swiper>
                        </>
                        }
                        {matches.small
                        && <div className={'slider__cards__mobile'}>
                            {items?.map(el => <Card item={el} handleAddGood={handleAddGood}/>)}
                        </div>
                        }
                    </div>
                )}


            </Media>
        </div>
    )
}