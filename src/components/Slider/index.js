import React, {useCallback} from "react";
import {useSelector} from "react-redux";
import Card from "../Card";
import {Swiper, SwiperSlide} from "swiper/react";
import {useInView} from "react-intersection-observer";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import Media from 'react-media'


// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation
} from 'swiper/core';
import HeaderBlock from "../HeaderBlock";
import Svg from "../Svg/Svg";
import Roster from "../Svg/Roster";
import CoffeeCap from "../Svg/CoffeeCap";

SwiperCore.use([Pagination, Navigation]);


export default function App({handleAddGood, header, title}) {
    let items = useSelector(state => state.item.items)

    const [ref, inView] = useInView({

        rootMargin: '-300px 0px',
    });
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
                            {/*<Svg*/}
                            {/*    className={'Roster'}*/}
                            {/*    viewBox={'-0 -0 20 27'}*/}
                            {/*    path={<Roster/>}*/}
                            {/*/>*/}

                            {/*<Svg*/}
                            {/*    className={'CoffeeCap'}*/}
                            {/*    viewBox={'-0 -0 25 35'}*/}
                            {/*    path={<CoffeeCap/>}*/}
                            {/*/>*/}
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                slidesPerGroup={1}
                                loop={true}
                                loopFillGroupWithBlank={true}
                                navigation={true}
                                className="mySwiper"
                            >

                                {items.map(el => {
                                        return (
                                            <SwiperSlide>
                                                <Card item={el} handleAddGood={handleAddGood}/>
                                            </SwiperSlide>
                                        )
                                    }
                                )}
                            </Swiper>
                        </>
                        }
                        {matches.small
                        && <div className={'slider__cards__mobile'}>
                            {items.map(el => <Card item={el} handleAddGood={handleAddGood}/>)}
                        </div>
                        }
                    </div>
                )}


            </Media>
        </div>
    )
}