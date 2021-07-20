import React, {useState} from 'react';


const PlayButton = ({handleOpenVideo}) => {


    return (
        <div className="playBtn">
            <div className="playBtn__wrapper">
                <div className="playBtn__btn" onClick={handleOpenVideo}>
                </div>
            </div>
        </div>
    )
        ;
};

export default PlayButton;
