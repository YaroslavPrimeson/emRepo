import React from 'react';
import {Form, Row, Col} from 'react-bootstrap'
import Button from "../Button";
import HeaderBlock from '../HeaderBlock'
import MapComp from '../MapComp/Map'
import MapBox from '../MapComp/MapBox'

const Index = () => {

    return (
        <div className="ContactBlock__wrapper" id={"contacts"}>
            <Row className={'ContactBlock'}>
                <Col md={6} className={'LeftBlock__cont col-sm-12'}>
                    {/*<div className={"ContactHeadersContainer"}>*/}
                    {/*    <div className={"ContactHeader1 FontHeader2"}>Напишите нам</div>*/}
                    {/*    <div className={"ContactHeader2 FontSubHeader2"}>Мы сразу свяжемся с Вами</div>*/}
                    {/*</div>*/}
                    <HeaderBlock subtitle={'Мы сразу свяжемся с Вами'} title={'Напишите нам'}></HeaderBlock>
                    <Col className={"ContactInputContainer"}>
                        <Form.Control type="text" placeholder="Имя"/>
                        <Form.Control type="text" placeholder="Фамилия"/>
                        <Form.Control as="textarea" rows={3} placeholder="Сообщение"/>
                        <div className={"ContactInputButton"}>
                            <Button colSm={12} text={"Отправить"}/>
                        </div>
                    </Col>


                </Col>
                <Col md={6}  className={'RightBlock col-sm-12'}>

                   <div className={'ContactBlock__MapContainer'}>
                       <MapBox/>
                   </div>
                </Col>
            </Row>
        </div>
    );
};

export default Index;