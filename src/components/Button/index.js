import React from 'react';


const Button = ({text = "купить", onClick, className = "", disabled}) => {
    const disabledBtn = disabled ? "disBtn" : ""
    return (

        <button className={`buttonL__container ${className}`} onClick={onClick}>
            <span className={"buttonL__wrapperBefore"}/>
            {text}
            <span className={"buttonL__wrapperAfter"}/>
        </button>

    );
};

export default Button;
