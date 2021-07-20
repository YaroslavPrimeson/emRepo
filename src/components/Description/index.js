import React, {useEffect, useRef, useCallback} from 'react';
import Post from "../Post"
import descImage from "../../Images/descriptionImage.jpg"
import {useInView} from "react-intersection-observer";
import HeaderBlock from '../HeaderBlock'
import Media from 'react-media';

const Description = (
    // {setPosition, rendering}
) => {

    // const measuredRef = useCallback(node => {
    //     if (node !== null) {
    //         setPosition({description: node.getBoundingClientRect()})
    //     }
    // }, []);

    const postContent1 = {
        title: "Качество",
        text: "Направление нашей команды работает на стабильность качества продукта. Вкус кофе, который Вы пробовали, всегда будет одинаково премиальным!"
    }
    const postContent2 = {
        title: "Цена",
        text: "Благодаря профессиональному оборудованию, на нашем производстве были минимизированны все возможные затраты и Мы создаем Премиальный продукт по конкурентной цене!"
    }
    const postContent3 = {
        title: "Команда",
        text: "Все вышеперечисленное достигается благодаря правильной работе гашей команды. се сотрудники прошли европейсекое обучение SCA! "
    }
    const postContent4 = {
        title: "Доставка",
        text: "Благодаря правильной статистике и логистике, все заказы в кофейни поставляются в день заказа или на следующий!"
    }
    const postContent5 = {
        title: "Доставка",
        text: "Благодаря правильной статистике и логистике, все заказы в кофейни поставляются в день заказа или на следующий!"
    }
    const [ref, inView] = useInView({

        rootMargin: '-300px 0px',
    });
    return (
        <div className="description"

             ref={ref}
             data-inview={inView}
        >

            <HeaderBlock title={'Кофе свежей обжарки'} subtitle={'Почему клиенты выбирают именно Нас'}/>
            <Media queries={{
                small: "(max-width: 767px)",
                medium: "(min-width: 768px) and (max-width: 1023px)",
                large: "(min-width: 1024px)"
            }}>
                {matches => (<>{((matches.medium || matches.small) || inView) &&
                (<div className="description__body">
                    <div className="description__tab RollingLeftToRight">
                        <Post title={postContent1.title} text={postContent1.text}/>
                        <Post title={postContent3.title} text={postContent3.text}/>
                    </div>
                    <div className="description__tab">
                        <div className="description__image">
                            <img className={'Zooming'} src={descImage} alt=""/>
                        </div>
                        <div className="description__tab--bottom RollingBottomToTop">

                            <Post title={postContent4.title} text={postContent5.text}/>
                        </div>
                    </div>
                    <div className="description__tab RollingRightToLeft">
                        <Post title={postContent2.title} text={postContent2.text}/>
                        <Post title={postContent4.title} text={postContent4.text}/>
                    </div>
                </div>)
                }</>)}
            </Media>
        </div>
    );
};

export default Description;
