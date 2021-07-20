import React, {useCallback} from 'react';
import RekItem from "../RekItem"



const Rekl = ({rendering = true, setPosition=null}) => {
    const rekContent = [{
        title: "Оплата",
        text: ["Наличными при самовывозе", "Безналичный расчет (р/с для ООО, ФОП)", "Наложенный платеж при получении товара", "Оплата картой"]
    }, {
        title: "Доставка",
        text: ["Собственная доставка по Киеву", "Доставка Новой почтой", "Доставка Курьерской службой"]
    }, {
        title: "Гарантия",
        text: ["Мы уверены на 100% в каждом товаре магазина", "Если Вам не подошел товар - его всегда можно вернуть"]
    }]
    const measuredRef = useCallback(node => {
        if (node !== null && setPosition) {
            setPosition({commercial: node.getBoundingClientRect()})
        }
    }, []);

    return (
        <div className="rekl__wrapper" id={"courier"} ref={measuredRef}>
            {rendering && <div className="rekl GoesDown">
                {rekContent.map((elem, i) => {
                    return (
                        <RekItem title={elem.title} text={elem.text} key={i}/>
                    )
                })}
            </div>}
        </div>
    );
};

export default Rekl;
