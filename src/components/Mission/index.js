import React from 'react';
import SubMission from "../SubMission";
import bgimg from "../../Images/bg.png"
import imgCoffe1 from "../../Images/coffe1.jpg"
import imgCoffe2 from "../../Images/coffe2.jpg"


const Mission = ({title}) => {

    const content = [
        {
        title: "Кофе для Вашего бизнеса",
        text: "Каждый день мы обжариваем кофе и поставляем его в кофейни, кафе и рестораны по всей Украине. Специально для Вам мы подготовили прайс",
        btnText: "Прайс",
        btnFunc: () => {
        },
        imgs: [bgimg, imgCoffe1, imgCoffe2]
    }
        , {
            title: "Кофе в офис",
            text: "Большое количество наших клиентов предпочитают заказывать кофе в офис. Большой выбор качественного зерна, быстрая доставка и цена - вот за что нас любят клиенты!",
            btnText: "Прайс",
            btnFunc: () => {
            },
            imgs: [bgimg, imgCoffe1, imgCoffe2]
        }, {
            title: "Кофе в дом",
            text: "Широкий выбор Premium и Speciality кофе не оставит равнодушным гурманов и любителей кофе, а если Вы новичек, то наша команда с удовольствием поможет Вам сделать правильный выбор!",
            btnText: "Прайс",
            btnFunc: () => {
                // console.log("Загрузка Прайс Кофе в Дом.")
            },
            imgs: [bgimg, imgCoffe1, imgCoffe2]
        }
    ]

    return (
        <div className="mission" id={"help"}>
            <div className="mission__wrapper">
                <h2 className="mission__title">{title}</h2>
                {content.map((item, index) => {
                    return (
                        <SubMission key={index} title={item.title} text={item.text} btnText={"Прайс"}
                                    btnFunc={item.btnFunc}
                                    pictures={item.imgs} reverse={index % 2 !== 0}/>
                    )
                })}
            </div>
        </div>
    );
};

export default Mission;
