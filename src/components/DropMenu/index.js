import React from 'react';


const Dropdown = ({data = [{}], title, classname}) => {
const onChangeHandler=(e)=>{

}
    return (
        <div className={`dropdown ${classname}`}>
            <label className="select-label dropdown__title">{title}</label>
            <select className="cs-select cs-skin-rotate dropdown__select" onChange={onChangeHandler}>
                {data.map((item, index)=>{
                    return(
                        <option className="dropdown__option" value={item?.value} key={index} >{item?.value}</option>
                    )
                })}}
            </select>
        </div>
    );
};

export default Dropdown;
