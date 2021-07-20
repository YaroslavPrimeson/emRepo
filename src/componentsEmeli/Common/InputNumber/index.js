import React from 'react';
import './index.scss';
import Svg from '../../Svg/Svg'
import DownArrow from '../../Svg/Images/downArrow.svg'
import UpArrow from '../../Svg/Images/UpArrow'

const Index = ({initialNumber = 1, onChange}) => {

    const onChangeInput = (e) => {
        onChange(parseInt(e.target.value))
    }
    const onIncrement = (e) => {
        onChange(initialNumber += 1)
    }

    const onDecrement = (e) => {
        e.preventDefault()
        if (parseInt(initialNumber) > 1) {
            onChange(initialNumber -= 1)
        }
    }
    return (
        <div className={'InputNumber'}>
            <div className={'InputUp InputNumberButton'} onClick={onIncrement}><Svg
                path={<UpArrow/>}

            /></div>
            <input type="number" value={initialNumber === 0 ? "" : initialNumber} onChange={onChangeInput}
                   name={'input-number'}/>

            <div className={'InputDown InputNumberButton'} onClick={onDecrement}><Svg
                path={<DownArrow/>}
            /></div>
        </div>
    );
};

export default Index;