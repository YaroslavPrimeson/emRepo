import React from 'react';
// import Dropdown from "../DropMenu";


const Radio = ({title, list, func}) => {

    return (
        <div className="radio__main">
            <div className="radio__title">{title}</div>

            {list.map((elem, index) => {
                return (
                    <label className="radio" key={index}>
                        <span className="radio__input">
                            <input type="radio" name="radio" onChange={e => func(parseInt(e.target?.value))}
                                   value={index + 1}/>
                            <span className="radio__control"></span>
                        </span>
                        <span className="radio__label">{elem}</span>
                    </label>
                )
            })}
            <label className="radio">
                <span className="radio__input">
                    <input type="radio" name="radio" onChange={e => func(parseInt(e.target?.value))} value={""}/>
                    <span className="radio__control"></span>
                </span>
                <span className="radio__label">Показать все</span>
            </label>
            {/*<Dropdown title="Помол:" data={[*/}
            {/*    {id: '1', value: 'Зерно'},*/}
            {/*    {id: '2', value: 'Под чашку'},*/}
            {/*    {id: '3', value: 'Под гейзер'},*/}
            {/*    {id: '4', value: 'Под Кемекс'},*/}
            {/*    {id: '5', value: 'Под Пуровер'},*/}
            {/*    {id: '6', value: 'Под Гейрез'},*/}
            {/*    {id: '7', value: 'Под Эспрессо'},*/}
            {/*    {id: '8', value: 'Под Турку'}*/}
            {/*]}/>*/}
        </div>
    )
};

export default Radio;
