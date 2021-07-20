import React, {useCallback, useState} from 'react';
import Category from "../../components/CategoryMenu";
import Cards from "../../components/Cards"
import Lines from "../../components/Lines"
import Radio from "../../components/Radio";
import {useSelector} from "react-redux";
import Dropdown from "../../components/DropMenu";
import HeaderBlock from '../../components/HeaderBlock'
import "./index.scss"
import Svg from '../../components/Svg/Svg'
import Navigation from '../../components/Navigation'
import Roster from "../../components/Svg/Roster";
import CoffeeCap from '../../components/Svg/CoffeeCap'
import Media from 'react-media'

const Shop = () => {
    const [subType, setSubType] = useState("");
    const [type, setType] = useState(1);
    let filteredItems = [];
    let items = useSelector(state => state.item.items)

    const dataCoffee = {
        title: "Кофе свежей обжарки",
        list: ["Купаж", "Премиум кофе", "Speciality кофе", "Под фильтр", "Для кофемашин", "Светлая обжарка", "Темная обжарка", "Arabica mix"]
    }
    const dataTools = {
        title: "Инструменты",
        list: ["Все для Кофемашины", "Все для Альтернатив", "Матча и Аксессуары"]
    }
    const dataMachine = {
        title: "Типы оборудования",
        list: ["кофемашины", "Кофемолки", "Ринзеры", "Фильтры для воды", "Соковыжималки", "Б/У оборудование"]
    }
    const dataDecor = {
        title: "Декор",
        list: ["красивости", "прочие красивости"]
    }

    items = items.filter(item => {
        return item?.type === type;
    })

    if (!subType) {
        filteredItems = [...items];
    } else {
        filteredItems = items.filter(item => {
            return item?.subType === subType;
        })
    }

    return (<>
            <Lines/>
            <Navigation/>
            <div className="shop__wrapper" id={"shop"}>
                <Media queries={{
                    small: "(max-width: 767px)",
                    medium: "(min-width: 768px) and (max-width: 1023px)",
                    large: "(min-width: 1024px)"
                }}>
                    {matches => (
                        <div className="shop">
                            <HeaderBlock title={'Наш Магазин'}
                                         subtitle={'В нашем магазине представлен кофе Premium и Speciality класса, а также широкий спектр сопутствующего оборудования'}/>
                            {!matches.small &&
                            <>
                                <Svg
                                    className={'Roster'}
                                    viewBox={'-0 -0 20 27'}
                                    path={<Roster/>}
                                />
                                <Svg
                                    className={'CoffeeCap'}
                                    viewBox={'-0 -0 25 35'}
                                    path={<CoffeeCap/>}
                                />
                            </>
                            }


                            <Category title={"Категории"}
                                      content={[{
                                          name: "Кофе",
                                          func: setType,
                                          func2: setSubType,
                                          typeId: 1
                                      }, {
                                          name: "Инструменты",
                                          func: setType,
                                          func2: setSubType,
                                          typeId: 2
                                      }, {
                                          name: "Кофемашины",
                                          func: setType,
                                          func2: setSubType,
                                          typeId: 3
                                      }, {
                                          name: "Декор",
                                          func: setType,
                                          func2: setSubType,
                                          typeId: 4
                                      }
                                      ]} currentType={type}/>
                            <div className="shop__items">
                                <div className="">
                                    {type === 1 &&
                                    <Radio title={dataCoffee.title} list={dataCoffee.list} func={setSubType}/>}
                                    {type === 2 &&
                                    <Radio title={dataTools.title} list={dataTools.list} func={setSubType}/>}
                                    {type === 3 &&
                                    <Radio title={dataMachine.title} list={dataMachine.list} func={setSubType}/>}
                                    {type === 4 &&
                                    <Radio title={dataDecor.title} list={dataDecor.list} func={setSubType}/>}
                                    {type === 1 && <Dropdown title="Помол:" data={[
                                        {id: '1', value: 'Зерно'},
                                        {id: '2', value: 'Под чашку'},
                                        {id: '3', value: 'Под гейзер'},
                                        {id: '4', value: 'Под Кемекс'},
                                        {id: '5', value: 'Под Пуровер'},
                                        {id: '6', value: 'Под Гейрез'},
                                        {id: '7', value: 'Под Эспрессо'},
                                        {id: '8', value: 'Под Турку'}
                                    ]} classname="shop__dropdown"/>}
                                </div>
                                <Cards items={filteredItems}/>
                            </div>

                        </div>)}
                </Media>
            </div>
        </>
    );
};

export default Shop;
