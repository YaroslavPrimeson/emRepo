import React, {useState} from 'react';
import "./index.scss"

const Index = ({name, data, func}) => {
    const [value, setValue] = useState(data[0].id)

    const onChangeHandler = (el) => {
        func({
            size: el.value,
            cof: el.cof
        })
        setValue(el.id)
    }

    return (
        <>
            {data?.map((el, index) => {
                return (
                    <div className={'FormRadio inputs'} key={index}>
                        <input
                            type={'radio'}
                            checked={value === el.id}
                            id={el.id} name={name}
                            value={el.cof}
                            onChange={() => onChangeHandler(el)}
                        />
                        <label className={'LabelRadio'} htmlFor={el.id}>{el.value}</label>
                    </div>
                )
            })}
        </>
    );
};

export default Index;