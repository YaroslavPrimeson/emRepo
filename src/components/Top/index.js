import React, {useCallback, useState} from 'react';
import Media from 'react-media';
import Svg from "../Svg/Svg";
import CoffeePlant from "../Svg/Images/CoffeePlant"
import CardDescriptionBlock from '../CardDescriptionBlock'
import {useSelector} from "react-redux";
import Image from '../../Images/Coffee-Beans-Shop-Australia-Packaging-Platinum-Blend-buy-coffee-beans.png';
import Button from '../Button';
import ModalCard from "../ModalCard";
import {useInView} from "react-intersection-observer";

const Top = () => {
    const [showCard, setShowCard] = useState(false)
    let item = useSelector(state => state.item.items[0])

    const [ref, inView] = useInView({
        rootMargin: '-300px 0px',
    });
    return (

        <div className="top__wrapper"
             id={"main"} id={'main'}
             ref={ref}
             data-inview={inView}>
            <Media queries={{
                small: "(max-width: 767px)",
                medium: "(min-width: 768px) and (max-width: 1023px)",
                large: "(min-width: 1024px)"
            }}>
                {matches => (
                    <>
                        {((matches.medium || matches.small) || inView) &&
                        <div className='top'>

                            {/*{*/}
                            {/*    (matches.medium || matches.large) &&*/}
                            {/*    <>*/}
                            {/*        <Svg*/}
                            {/*            className={'PositionMobileSimplePageSvg'}*/}
                            {/*            viewBox={'-0 -0 113.76 210.48'}*/}
                            {/*            path={<CoffeePlant/>}*/}
                            {/*        />*/}
                            {/*        <Svg*/}
                            {/*            className={'PositionMobileSimplePageSvg TopRightSvg'}*/}
                            {/*            viewBox={'-0 -0 113.76 210.48'}*/}
                            {/*            path={<CoffeePlant/>}*/}
                            {/*        />*/}
                            {/*    </>*/}
                            {/*}*/}
                            {showCard && <ModalCard item={item} openClose={() => setShowCard(!showCard)}/>}
                            <div className={'top__title RollingLeftToRight'}>
                                <h2>Представляем вашему вниманию</h2>
                                <p>лучший кофе апреля</p>
                            </div>
                            <div className={'top__down-title RollingLeftToRight'}>
                                <h3>крафтовый производитель</h3>
                                <p>кофе в Киеве</p>
                            </div>
                            <div className={'top__best-title RollingRightToLeft'}>
                                <h3>Premium & Specialty coffee</h3>
                                <p>№1 в Украине</p>
                            </div>
                            <div className={'top__image'}>
                                {item && <img src={Image} alt="coffee" className={'Zooming'}/>}
                            </div>
                            {item && <div className={'top__description-card RollingRightToLeft'}>
                                <h2>{item?.title}</h2>
                                <CardDescriptionBlock item={item}/>
                                <div className={'top__description-buttons'}>
                                    <Button text={'купить'} onClick={() => setShowCard(!showCard)}/>
                                    <a href="/shop"><Button text={'перейти в магазин'}>Помощник </Button></a>
                                </div>
                            </div>}
                        </div>
                        }
                    </>
                )}
            </Media>
        </div>
    );
};

export default Top;
