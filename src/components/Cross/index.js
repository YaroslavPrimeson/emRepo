import React from 'react';


const Cross = ({close, className}) => {
    return (
        <div className={`cross ${className}`} onClick={close}>
        </div>
    );
};

export default Cross;
