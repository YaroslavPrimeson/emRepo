import React from 'react';
import saleOne from "../../Images/sale.png"
import bestseller from "../../Images/bestseller.png"
import newItem from "../../Images/new-prod.png"
import rec from "../../Images/recommend.png"


const Labels = ({sale, newOne, hit, recomend}) => {

    return (
        <div className="labels">
            {sale && <div className="labels__item labels__item--sale"><div className="labels__text labels__text--sale">
                <img src={saleOne} alt=""/></div></div>}
            {hit && <div className="labels__item labels__item--hit"><div className="labels__text labels__text--hit"><img
                src={bestseller} alt=""/></div></div>}
            {recomend && <div className="labels__item labels__item--recomend"><div className="labels__text labels__text--recomend">
                <img src={rec} alt=""/></div></div>}
            {newOne && <div className="labels__item labels__item--new"><div className="labels__text labels__text--new">
                <img src={newItem} alt=""/></div></div>}
        </div>
    )
};

export default Labels;
