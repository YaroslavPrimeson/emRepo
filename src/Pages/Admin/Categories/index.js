import React, {useState, useEffect} from 'react';
import Button from "../../../componentsEmeli/Button";
import {
    deleteDocumentFromCollectionWithID,
    getCollection, getDocInCollection,
    setDocumentToCollection,
    updateDocumentInCollection
} from "../../../Helper/adminHelper";
import {Modal, Form, Row, Col} from "react-bootstrap";
import RowCategories from "./RowCategories";


const Index = () => {
    /**************************************
     * STATE
     * **************************************/
    const [modalAddNew, setModalAddNew] = useState(false)
    const [error, setError] = useState('')
    const [categories, setCategories] = useState([])
    const [addNewCategories, setAddNewCategories] = useState([])
    const [modalChange, setModalChange] = useState({isOpenChange: false, id: null})
    const [changedCategories, setChangedCategories] = useState([])
    const [newDoc, setNewDoc] = useState({
        categoryName: '',
        categoriesArray: [],
    })
    const getCategories = () => {
        getCollection('categories').then(r => {
            setCategories(r)
        })
    }

    useEffect(() => {
        getCategories()
    }, [modalAddNew])

    useEffect(() => {
        setChangedCategories(categories.filter(el => el.idPost === modalChange.id))
    }, [modalChange])

    const addNewDoc = (doc) => {
        const categoriesArray = Object.entries(doc)
        categoriesArray.map((el, index) => {

            if (el[1] === '') {
                setError('Error adding field ' + el[0]);
                setTimeout(() => {
                    setError('');
                }, 1000)
                return;
            }
            if (el[1] !== '' && index === (categoriesArray.length - 1)) {
                setDocumentToCollection('categories', doc).then(r => {
                })
                    .catch(e => {
                        console.log('error', e)
                    })
                    .finally(
                        setNewDoc({
                            categoryName: '',
                            categoriesArray: [],
                        }),
                        setModalAddNew(false),
                        setAddNewCategories([])
                    )
            }
        })


    }
    const updateDoc = (id, doc) => {
        updateDocumentInCollection('categories', doc, id).then(r => {
            getCategories()
            console.log("success")
            // console.log(r)
            // console.log(doc)
            // console.log(id)
        },id).catch(e => {
            console.log('error', e)
        })
        // updateDocumentInCollection('categories',{
        //     doc: doc
        // }, id).then(r => {
        //     console.log(r)
        //     console.log(doc)
        // }).catch(e => {
        //     console.log(e)
        // });

    }
    const deleteDoc = (id) => {
        deleteDocumentFromCollectionWithID('categories', id).then(r => {
            getCategories()
        }).catch(e => {
            console.log(e)
        })

    }

    const handleInput = (type, e, index = 0) => {
        if (e.target.name === 'categoryName') {
            setNewDoc(prevState => {
                return {
                    categoryName: e.target.value,
                    categoriesArray: [...prevState.categoriesArray]
                }
            })
        }
        if (e.target.name === 'subCategory') {
            if (changedCategories[0]) {
                // setNewDoc()
                setNewDoc(prevState => {
                    const existingCat = prevState.categoriesArray?.find(el => el.id === index)
                    return {
                        categoryName: prevState.categoryName,
                        categoriesArray: [
                            ...changedCategories[0]?.categoriesArray?.filter(el => el.id !== index),
                            existingCat
                                ?
                                {id: index, subCategory: e.target.value,}
                                :
                                {id: index, subCategory: e.target.value}
                        ]
                    }
                })
            } else {
                setNewDoc(prevState => {
                    const existingCat = prevState.categoriesArray?.find(el => el.id === index)
                    return {
                        categoryName: prevState.categoryName,
                        categoriesArray: [
                            ...prevState.categoriesArray.filter(el => el.id !== index),
                            existingCat
                                ?
                                {id: index, subCategory: e.target.value,}
                                :
                                {id: index, subCategory: e.target.value}
                        ]
                    }
                })
            }
        }
        if (e.target.name === 'descriptionCategory') {

            setNewDoc(prevState => {

                const existingCat = prevState.categoriesArray?.find(el => el.id === index)
                return {
                    categoryName: prevState.categoryName,
                    categoriesArray: [
                        ...prevState.categoriesArray.filter(el => el.id !== index),
                        existingCat
                            ?
                            {...existingCat, descriptionCategory: e.target.value}
                            :
                            {...existingCat, descriptionCategory: e.target.value}
                    ]
                }
            })
        }
    }

    const handleUpdate = () => {
        if (newDoc.categoryName !== '') {
            updateDoc(modalChange.id, newDoc)
            console.log(modalChange.id,newDoc)
            setModalChange(prevState => {
                return {
                    ...prevState,
                    isOpenChange: false
                }
            })
            setChangedCategories([])
        } else {
            updateDoc(modalChange.id, changedCategories[0])
            console.log(modalChange.id,changedCategories[0],changedCategories)
            setModalChange(prevState => {
                return {
                    ...prevState,
                    isOpenChange: false
                }
            })
        }
    }
    /**************************************
     * RENDER
     * **************************************/
    return (
        <div>
            <Row>
                <Col>
                    <Button
                        onClick={() => setModalAddNew(true)}
                        className={''}
                        text={'Add new'}
                    />
                </Col>
            </Row>
            {/*Modal Add*/}
            <Modal className={'admin__modal'} show={modalAddNew} onHide={() => setModalAddNew(false)}>
                {error === '' ?
                    <>
                        <Modal.Body>
                            <Form.Control
                                type={'text'}
                                placeholder={'Название категории'}
                                name={'categoryName'}
                                onChange={(e) => handleInput('categoryName', e)}
                            />
                            {addNewCategories.length > 0 ?
                                addNewCategories.map((el, index) => {
                                        return (
                                            <div key={index}>
                                                <Form.Control
                                                    type={'text'}
                                                    placeholder={'Подкатегория'}
                                                    name={`subCategory`}
                                                    onChange={(e) => handleInput('subCategory', e, index)}
                                                />
                                                <Form.Control
                                                    type={'text'}
                                                    placeholder={'Описание'}
                                                    name={`descriptionCategory`}
                                                    onChange={(e) => handleInput('description', e, index)}
                                                />
                                            </div>
                                        )
                                    }
                                )
                                :
                                <></>
                            }
                            <Button text={'+'} onClick={() => setAddNewCategories(prevState => {
                                return [...prevState, '']
                            })}/>
                            <Button text={'-'} onClick={() => setAddNewCategories(prevState => {
                                return [...prevState.splice(-1, 1)]
                            })}/>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                onClick={() => addNewDoc(newDoc)}
                                className={''}
                                text={'Add'}
                            />
                        </Modal.Footer>
                    </>
                        :
                    <Modal.Body>
                        {error}
                    </Modal.Body>
                }
            </Modal>
            {/*Modal Change*/}
            <Modal className={'admin__modal'} show={modalChange.isOpenChange} onHide={() => setModalChange(prevState => {
                       setChangedCategories([])
                       return {
                           ...prevState,
                           isOpenChange: false
                       }
                   })}>
                <Modal.Header>Обновить категорию</Modal.Header>
                {changedCategories.length > 0 && <Modal.Body>
                    <h2>Категория</h2>
                        <Form.Control
                            type={'text'}
                            placeholder={changedCategories[0].categoryName}
                            name={'name'}
                            defaultValue={changedCategories[0].categoryName}
                            onChange={(e) => handleInput('name', e)}
                        />
                        {changedCategories[0].categoriesArray?.length > 0 ?
                            changedCategories[0].categoriesArray.map((el, index) => {

                                    return (
                                        <div key={index}>
                                            <div>
                                                <h2>Подкатегория</h2>
                                            <Form.Control
                                                type={'text'}
                                                placeholder={el.subCategory}
                                                name={`subCategory`}
                                                defaultValue={el.subCategory}
                                                // value={el.subCategory}
                                                onChange={(e) => handleInput('subCategory', e, el.id)}
                                            />
                                            </div>
                                            <div>
                                            <h2>Описание</h2>
                                            <Form.Control
                                                type={'text'}
                                                placeholder={el.descriptionCategory}
                                                name={`descriptionCategory`}
                                                defaultValue={el.descriptionCategory}
                                                onChange={(e) => handleInput('descriptionCategory', e, el.id)}
                                            />
                                            </div>
                                        </div>
                                    )
                                }
                            )
                            :
                            <>
                                {addNewCategories.map((el, index) => {
                                            return (
                                                <div key={el + index}>
                                                    <Form.Control
                                                        type={'text'}
                                                        placeholder={'Header'}
                                                        name={`subCategory`}
                                                        onChange={(e) => handleInput('subCategory', e, index)}
                                                    />
                                                    <Form.Control
                                                        type={'text'}
                                                        placeholder={'Value'}
                                                        name={`descriptionCategory`}
                                                        onChange={(e) => handleInput('descriptionCategory', e, index)}
                                                    />
                                                </div>
                                            )
                                        }
                                    )
                                }
                            </>
                        }
                        {/*{*/}
                        {/*    addNewCategories.map((el, index) => {*/}
                        {/*            return (*/}
                        {/*                <div key={el + index}>*/}
                        {/*                    <Form.Control*/}
                        {/*                        type={'text'}*/}
                        {/*                        placeholder={'Header'}*/}
                        {/*                        name={`subCategory`}*/}
                        {/*                        onChange={(e) => handleInput('subCategory', e, index)}*/}
                        {/*                    />*/}
                        {/*                    <Form.Control*/}
                        {/*                        type={'text'}*/}
                        {/*                        placeholder={'Value'}*/}
                        {/*                        name={`descriptionCategory`}*/}
                        {/*                        onChange={(e) => handleInput('descriptionCategory', e, index)}*/}
                        {/*                    />*/}
                        {/*                </div>*/}
                        {/*            )*/}
                        {/*        }*/}
                        {/*    )*/}
                        {/*}*/}
                        <Button text={'+'} onClick={() => setAddNewCategories(prevState => {
                            return [...prevState, '']
                        })}/>
                        <Button text={'-'} onClick={() => setAddNewCategories(prevState => {
                            return [...prevState.splice(-1, 1)]
                        })}/>
                    </Modal.Body>
                }
                <Modal.Footer>
                    <Button
                        onClick={handleUpdate}
                        className={''}
                        text={'Change'}
                    />
                </Modal.Footer>
            </Modal>
            {/*Table*/}
            <div>
                {categories.map((c, index) => (
                    <RowCategories
                        index={index}
                        cat={c}
                        onChange={updateDoc}
                        onDelete={deleteDoc}
                        key={index}
                        setModalChange={setModalChange}
                    />
                ))}
            </div>
        </div>
    );
};

export default Index;