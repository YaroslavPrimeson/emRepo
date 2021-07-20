import React, {useEffect, useState} from 'react';
import Svg from "../Svg/Svg";
import CoffeePlant from "../Svg/Images/CoffeePlant";

const Index = ({history}) => {
    const [number, setNumber] = useState(5);
    const [show, setShow] = useState(true);
    const [classHide, setClassHide] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            console.log(number)
            if (number <= 5 && number!==0) {
                setNumber(prevState => {
                    if (prevState <= 5) {
                        return prevState - 1
                    }

                })
            }
            if(number ===0) {
                history.push('/')
            }
        }, 1000)
        return () => clearInterval(interval)
    }, [number])

    // useEffect(
    //     () => setTimeout(() => {
    //             history.push('/');
    //         },
    //         5000),
    //     [])

    return (
        <div className={'not__found'}>
            <Svg
                className={'PositionMobileSimplePageSvg'}
                viewBox={'-0 -0 113.76 210.48'}
                path={<CoffeePlant/>}
            />
            <Svg
                className={'PositionMobileSimplePageSvg TopRightSvg'}
                viewBox={'-0 -0 113.76 210.48'}
                path={<CoffeePlant/>}
            />
            <h1 className={'not__found__header'}>404</h1>
            <p>страница не найдена</p>
            <p>Вы будете автоматически перенаправленны на главную страницу</p>
            <p>{number}</p>
        </div>
    );
};

export default Index;