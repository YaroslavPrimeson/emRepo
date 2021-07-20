import Svg from "../Svg/Svg";
import BerryBranch from "../Svg/BerryBranch";
import React from "react";



const Index = ({title, subtitle, small}) => {
    return (
        <div className={'component__header__block'}>
            {!small && <Svg
                className={'component__header__block__svg left'}
                viewBox={'0 0 90 90'}
                path={<BerryBranch/>}
            />}
            {small && <Svg
                className={'component__header__block__svg left'}
                viewBox={'0 0 150 150'}
                path={<BerryBranch/>}
            />}
            <h2>{title}</h2>
            <p className={'component__header__block__text'}>{subtitle}</p>
            {!small && <Svg
                className={'component__header__block__svg right'}
                viewBox={'0 0 90 90'}
                path={<BerryBranch/>}
            />}
            {small && <Svg
                className={'component__header__block__svg right'}
                viewBox={'0 0 150 150'}
                path={<BerryBranch/>}
            />}
        </div>
    );
};

export default Index;