import React from 'react';


const Index = ({item, className}) => {
    return (
        <div className={`DescriptionBlock ${className}`}>
            {item?.options.map((option, index) => {
                return (
                    <div className={'DescriptionLine'} key={index}>
                        <h2 className={'DescriptionProperty'}>{option.title}: </h2>
                        <p className={'DescriptionValue'}>{option.content}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default Index;