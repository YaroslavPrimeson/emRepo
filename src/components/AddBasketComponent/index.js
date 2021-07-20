import React from 'react';
import Card from '../Card'


const Index = ({item}) => {

    /************************************
     * RENDER
     **************************************/
    return (
        <div className={'add__basket__goods'}>
           <div className={'add__basket__goods__wrapper'}>
               <div className={'add__basket__goods__flying'}>
                   <Card item={item}/>
               </div>
           </div>
        </div>
    );
};

export default Index;