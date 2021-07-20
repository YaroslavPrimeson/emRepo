import React from 'react';
import Button from "../Button"

import PatternDraw from '../Svg/PatternDraw'
import CoffeeBranch from '../Svg/CoffeeBranch'
import HeaderBlock from '../HeaderBlock'
import Svg from "../Svg/Svg";

const SubMission = ({title, text, btnText, btnFunc, pictures, reverse}) => {

    return (
        <div className="submission">
            <div className="submission__wrapper">
                <div className={`submission__info ${reverse ? 'submission__second' : ""}`}>
                    <HeaderBlock title={title} subtitle={text}/>
                    <div className="submission__btn col-sm-12">
                        <Button text={btnText} onClick={btnFunc}/>
                    </div>
                </div>
                <div className={`submission__images  ${reverse ? 'submission__first' : ""}`}>

                    <div
                        className={`submission__image ${reverse ? 'submission__image--2reverse' : "submission__image--2"}`}>
                        <img src={pictures[1]} alt=""/>
                        <Svg
                            className={`submission__image ${reverse ? 'submission__image--1reverse' : "submission__image--1"}`}
                            viewBox={'-0 -0 1000 1500'}
                            path={<CoffeeBranch/>}
                        />
                    </div>
                    <div
                        className={`submission__image ${reverse ? 'submission__image--3reverse' : "submission__image--3"}`}>
                        <img src={pictures[2]} alt=""/>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubMission;
