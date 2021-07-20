import React, {useEffect} from 'react';

const CardModal = ({item}) => {
    useEffect(()=>{
        console.log(item)
    },[])
    return (
        <div style={{position:"relative",width:"100vw",height:"100vh",background:"black"}}>
            <div style={{width:"100%",height:"100%"}}>
                <h1 style={{fontSize:"55px"}}>hello world</h1></div>

        </div>
    );
};

export default CardModal;