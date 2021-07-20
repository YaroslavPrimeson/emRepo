import React, {useEffect, useState} from 'react';
import {Row, Col, Modal, Form} from 'react-bootstrap'
import Button from "../../../componentsEmeli/Button";
import RowCategories from "../Categories/RowCategories";
import {uploadFile} from "../../../Helper/adminHelper";

const RowGoods = ({onChange, onDelete, goods, index, cat, subCat}) => {
    /********************************
     * STATE
     ********************************/
    const [modalDelete, setModalDelete] = useState(false)
    const [modalChange, setModalChange] = useState(false)
    const [changedGood, setChangedGood] = useState(null)

    const warningDelete = () => {
        setModalDelete(true)
    }

    const onOpenChange = () => {
        setModalChange(true)
        setChangedGood(goods)
    }

    const handleChange = (e) => {
        const {value, name, type, id, checked} = e.target
        // console.log(value, name, type, id, checked)
        if (type !== 'file') {
            if (type !== 'checkbox') {
                setChangedGood(prev => {

                    return {
                        ...prev, [name]: value
                    }
                })
            }
            if (type === 'checkbox') {
                if (checked === true) {
                    setChangedGood(prev => {
                        return {...prev, [id]: [...prev[id], name]}
                    })
                } else {
                    setChangedGood(prev => {
                        return {...prev, [id]: [...prev[id].filter(el => el !== name)]}
                    })
                }
            }
        } else {
            uploadFile(e).then(r => {
                setChangedGood(prev => {
                    return {
                        ...prev, [name]: r
                    }
                })
            })
        }
    }
    /********************************
     * RENDER
     ********************************/
    return (
        <Row key={index} className={'admin__row__goodsegories'}>
            <Col className={'admin__col__goods'} xs={1}>
            </Col>
            <Col className={'admin__col__goods'} xs={5}>
                <Row>Product name: {goods?.productName}</Row>
                <Row className={'admin__sub__goodsegory_block'}>
                    Product categories: {goods?.productCategory}
                </Row>
                <Row className={'admin__sub__goodsegory_block'}>
                    Product sub categories:{goods?.productSubCategory}
                </Row>
                <Row className={'admin__sub__goodsegory_block'}>
                    Product price:{goods?.productPrice}
                </Row>
                <Row className={'admin__sub__goodsegory_block'}>
                    Product Weight:{goods?.productWeight}
                </Row>
            </Col>
            <Col className={'admin__col__goods'} xs={2}>
                <Row>
                    <img width={100} src={goods?.productImage} alt={goods?.productName}/>
                </Row>
            </Col>
            <Modal className={'admin__modal'} show={modalDelete} onHide={() => setModalDelete(false)}>
                <Modal.Body>
                    вы уверены что хотите удалить {goods?.productName}?
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        onClick={() => {
                            onDelete(goods.idPost)
                            setModalDelete(false)
                        }}
                        text={'Да'}
                    />
                    <Button
                        onClick={() => setModalDelete(false)}
                        text={'Нет'}
                    />
                </Modal.Footer>
            </Modal>

            <Modal className={'admin__modal'} show={modalChange} onHide={() => setModalChange(false)}>
                <Modal.Body>
                    Изменить товар
                </Modal.Body>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="productName">
                            <Form.Label>Название продукта</Form.Label>
                            <Form.Control name={'productName'} type="text" placeholder="Введите название товара"
                                          onChange={handleChange} value={changedGood?.productName}/>
                        </Form.Group>
                        <Form.Group controlId="productPrice">
                            <Form.Label>Цена продукта</Form.Label>
                            <Form.Control name={'productPrice'} type="text" placeholder="Введите цену товара"
                                          onChange={handleChange} value={changedGood?.productPrice}/>
                        </Form.Group>
                        <Form.Group controlId="productWeight">
                            <Form.Label>Вес продукта</Form.Label>
                            <Form.Control name={'productWeight'} type="text" placeholder="Введите вес товара"
                                          onChange={handleChange} value={changedGood?.productWeight}/>
                        </Form.Group>
                        <Form.Group controlId="productCategory">
                            <Form.Label>Выберите категорию</Form.Label>
                            <Form.Control
                                name={'productCategory'}
                                as="select"
                                onChange={handleChange}
                                value={changedGood?.productCategory}
                            >
                                {cat?.map(el => <option key={el}>{el}</option>)}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="productSubCategory">
                            <Form.Label>Выберите подкатегорию</Form.Label>
                            {subCat
                                ?.find(el => {
                                    return el?.cat === changedGood?.productCategory
                                })
                                ?.subCat?.map((el, index) => {
                                        console.log(el)

                                        return <Form.Check
                                            type="checkbox"
                                            label={el}
                                            name={el}
                                            checked={changedGood?.productSubCategory?.find(subCat => {
                                                    return subCat === el
                                                }) ? true : false}
                                            onChange={handleChange}
                                        />

                                    }
                                )}
                        </Form.Group>

                        <Form.Group controlId="productImage">
                            <Form.Label>Загрузите фотографию товара</Form.Label>
                            <img src={changedGood?.productImage} alt={changedGood?.productName} width={100}/>
                            <Form.File
                                required
                                name={"productImage"}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="productDescription">
                            <Form.Label>Введите описание товара</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                onChange={handleChange}
                                value={changedGood?.productDescription}
                                name={'productDescription'}
                                type="text"
                                placeholder={changedGood?.productDescription}

                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        onClick={() => {
                            onChange(changedGood)
                            setModalChange(false)
                        }}
                        text={'Да'}
                    />
                    <Button
                        onClick={() => setModalChange(false)}
                        text={'Нет'}
                    />

                </Modal.Footer>
            </Modal>

            <Col className={'admin__col__buttons'} xs={4}>
                <Button text={'Изменить'} onClick={onOpenChange}/>
                <Button text={'Удалить'} onClick={warningDelete}/>
            </Col>
        </Row>
    );
};

export default RowGoods;