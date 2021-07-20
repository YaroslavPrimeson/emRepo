import React from 'react';


const CategoryMenu = ({title = "Cool title", content = [{}], currentType}) => {

    return (
        <div className="category">
            <div className="category__title">{title} <div className={'category__title__arrow'}></div></div>
            <ul className="category__items">
                {content.map((element, index) => {
                    return <li
                        className={`category__item ${element?.typeId === currentType ? "category__item--active" : ""}`}
                        key={index} onClick={() => {
                        element?.func(element?.typeId)
                        element?.func2("")

                    }}>{element?.name}</li>
                })}
            </ul>
        </div>
    );
};

export default CategoryMenu;
