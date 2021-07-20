import React, {useEffect, useState} from 'react';
import LogoSvg from "../Svg/Images/LogoSvg";
import Svg from "../Svg/Svg";
import '../../styles/Prelodaer.scss'

const Preloader = () => {
    const [number, setNumber] = useState(0);
    const [show, setShow] = useState(true);
    const [classHide, setClassHide] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            if (number < 100) {
                setNumber(prevState => {
                    if (prevState < 100) {
                        return prevState + 1
                    } else return 100
                })
            } else {
                setClassHide('hide')
                setTimeout(() => setShow(false), 1000)
            }
        }, 50)
        return () => clearInterval(interval)
    }, [number])

    return (
        <>
            {show && < div className={`preloader__container ${classHide}`}>
                <div className={"preloader__logo__container"}>
                    <Svg
                        className={'PositionLogoSvg'}
                        viewBox={"0 0 1299.000000 945.000000"}
                        path={<LogoSvg/>}
                    />
                    <div className={'preloader__number'}>{number + '%'}</div>
                </div>
                <div className={'preloader__line'} style={{"height": `${number}%`}}></div>
            </div>}
        </>
    );
}
;

export default Preloader;