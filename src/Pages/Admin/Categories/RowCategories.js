import React, {useState} from 'react';
import {Row, Col, Modal} from 'react-bootstrap'
import Button from "../../../componentsEmeli/Button";

const RowCategories = ({onChange, onDelete, cat, subCat, index, setModalChange}) => {

    const [modalDelete, setModalDelete] = useState(false)
    const warningDelete = () => {
        setModalDelete(true)
    }
    const onOpenChange = () => {
        setModalChange({
            id: cat.idPost,
            isOpenChange: true
        })
    }
    /************************************
     * RENDERf
     ************************************/
    return (
        <Row className={'admin__row__categories'}>
            <Col className={'admin__col__categories'} xs={8}>
                <Row>Название категории: {cat?.categoryName}</Row>
                <Row className={'admin__sub__category_block'}>подкатегории: {
                    cat?.categoriesArray?.map((el, index) =>
                        <div key={el + index} className={'admin__sub__category'}>
                            <div>название подкатегории: {el.subCategory}</div>
                            <div>Описание категории: {el.descriptionCategory}</div>
                        </div>
                    )}
                </Row>
            </Col>
            <Modal className={'admin__modal'} show={modalDelete} onHide={() => setModalDelete(false)}>
                <Modal.Body>
                    вы уверены что хотите удалить {cat.nameCategory}?
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        onClick={() => {
                            onDelete(cat.idPost)
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

            <Col className={'admin__col__buttons'} xs={4}>
                <Button text={'change'} onClick={onOpenChange}/>
                <Button text={'delete'} onClick={warningDelete}/>
            </Col>
        </Row>
    );
};

export default RowCategories;