import React from 'react';


const RekItem = ({title, text}) => {

    return (
        <div className="rekItem">
            <div className="rekItem__title">{title}</div>
            <div className="rekItem__text">{text.map((t,i)=>{
                return(
                    <p key={i}>{t}</p>
                )
            })}</div>
        </div>
    );
};

export default RekItem;
