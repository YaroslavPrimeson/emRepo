import React, {useState} from 'react';
import Phone from "../../components/Svg/Images/Phone";
import Svg from '../../components/Svg/Svg'
import FadeIn from 'react-fade-in';


const CallBtn = () => {
    const phoneRegExp = /^((\+38))?([ ])?((\(\d{3}\))|(\d{3}))?([ ])?(\d{3}[- ]?\d{2}[- ]?\d{2})$/
    const [number, setNumber] = useState("+380")
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)


    const callMe = () => {
        if (!number.match(phoneRegExp)) {
            setError(true)
            return
        }
        alert("We will Call")
    }

    const call = () => {
        alert("Calling")
    }

    const onChangeHandler = (e) => {
        // console.log(e.target.value.match(phoneRegExp))
        setNumber(e.target.value)
        if (error) setError(false)
    }

    const onBlurHandler = (e) => {
        if (e.target.value === "") {
            setNumber("+380")
        }
    }
    return (
        <div className={"callBtn"}>
            <FadeIn>
                {show && <div className="callBtn__contact">
                    <div className="callBtn__call"><span onClick={call}
                                                         className={"callBtn__call--title"}>Набрать номер</span></div>
                    <div className="callBtn__callback">
                        <input className={"callBtn__callback--input"} type="text" placeholder={"Введите номер"}
                               value={number} onChange={onChangeHandler} onBlur={onBlurHandler} pattern="^[0-9]+$" maxLength={13}/>
                        <span onClick={callMe} className={"callBtn__callback--title"}>Перезвоните мне</span></div>
                    {error && <div className="callBtn__error">Проверьте номер</div>}
                </div>}
            </FadeIn>
            <div className={'callBtn__icon'} onClick={() => {
                setShow(!show)
                setError(false)
            }}>
                <Svg
                    className={'PositionPhoneSvg'}
                    viewBox={'-10 -10 525.709 525.709'}
                    path={<Phone/>}
                />
            </div>
        </div>
    );
};

export default CallBtn;
