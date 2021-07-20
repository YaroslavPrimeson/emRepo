import React, {useEffect, useState} from 'react';
import {Tabs, Tab} from 'react-bootstrap'
import Goods from './Goods/index'
import Categories from './Categories/index'

const Index = () => {


    return (
        <div>
            <Tabs defaultActiveKey="adding" id="uncontrolled-tab-example">
                <Tab eventKey="adding" title="Категории">
                    <Categories/>
                </Tab>
                <Tab eventKey="else" title="Товар">
                    <Goods/>
                </Tab>

            </Tabs>

        </div>
    );
};

export default Index;