import React, {useEffect, useState} from 'react';
import {
    setDocumentToCollection,
    getCollection,
    uploadFile,
    deleteDocumentFromCollectionWithID, updateDocumentInCollection
} from '../../../Helper/adminHelper'
import {Form, Modal} from "react-bootstrap";
import Button from "../../../componentsEmeli/Button";
import RowGoods from "./RowGoods";

const schema = {
    productCategory: [],
    productImage: '',
    productName: '',
    productPrice: "",
    productSubCategory: [],
    productDescription: '',
    productWeight: '',
    quantity:1
}

const Index = () => {
    const [error, setError] = useState('')

    const [categories, setCategories] = useState([])
    const [subCategories, setSubCategories] = useState([])
    const [goods, setGoods] = useState([])
    const [good, setGood] = useState(schema)
    const [modalAddNew, setModalAddNew] = useState(false)

    useEffect(() => {
    }, [subCategories, good])
    useEffect(() => {
        getCollection('categories').then(r => r.map(el => {
            setCategories(prev => [...prev, el.categoryName])
            setSubCategories(prev => {


                return [...prev,
                    {
                        cat: el.categoryName,
                        subCat: [...el.categoriesArray.map(el => el.subCategory)]
                    }]
            })
        }))
        getCollection('goods').then(r => setGoods(r))
    }, [])
    const getGoods = () => {
        getCollection('goods').then(r => {
            setGoods(r)
        })
    }
    const deleteDoc = (id) => {
        deleteDocumentFromCollectionWithID('goods', id).then(r => {
            getGoods()
        }).catch(e => {
            console.log(e)
        })

    }
    const updateDoc = (doc) => {
        updateDocumentInCollection('goods', doc, doc.idPost).then(r => {
            getGoods()
        }).catch(e => {
            console.log('error', e)
        })
    }

    const addNewDoc = (good) => {
        const goodArray = Object.entries(good)
        goodArray.map((el, index) => {
            if (el[1] === '') {
                setError('Error adding field ' + el[0]);
                setTimeout(() => {
                    setError('');
                }, 1000)
                return;
            }
            if (el[1] !== '' && index === (goodArray.length - 1)) {
                setDocumentToCollection('goods', good).then(r => {
                    // console.log(r)
                })
                    .catch(e => {
                        console.log('error', e)
                    })
                    .finally(
                        setGood(null),
                        setModalAddNew(false),
                    )
            }
        })
    }

    const handleAddGoods = () => {
        setModalAddNew(true)
    }

    const handleInput = (e) => {
        const {value, name, type, id, checked} = e.target;
        // console.log(value, name, type, id)
        if (type !== 'file') {
            if (type !== 'checkbox') {
                setGood(prev => {
                    return {...prev, [name]: value}
                })
            }

            if (type === 'checkbox') {
                if (checked === true) {
                    setGood(prev => {
                        return {...prev, [id]: [...prev[id], name]}
                    })
                }
                else {
                    setGood(prev => {
                        return {...prev, [id]: [...prev[id].filter(el=>el!==name)]}
                    })
                }
            }

        } else {
            uploadFile(e).then(r => {
                setGood(prev => {
                    return {...prev, [name]: r}
                })

            })
        }
    }
    /*************************************
     * RENDER
     *************************************/
    return (
        <div>
            <button onClick={handleAddGoods}>Add</button>
            {goods?.map((good, index) =>
                <RowGoods
                    goods={good}
                    onDelete={deleteDoc}
                    onChange={updateDoc}
                    cat={categories}
                    subCat={subCategories}
                    key={good + index}
                />
            )}
            {/*Modal add new*/}
            <Modal className={'admin__modal'} show={modalAddNew} onHide={() => setModalAddNew(false)}>
                {error === '' ? (
                    <>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId="productName">
                                    <Form.Label>Название продукта</Form.Label>
                                    <Form.Control
                                        name={'productName'}
                                        type="text"
                                        placeholder="Введите название товара"
                                        value={good?.productName}
                                        onChange={handleInput}
                                    />
                                </Form.Group>
                                <Form.Group controlId="productPrice">
                                    <Form.Label>Цена</Form.Label>
                                    <Form.Control
                                        name={'productPrice'}
                                        type="text"
                                        placeholder="Введите цену товара"
                                        onChange={handleInput}
                                        value={good?.productPrice}
                                    />
                                </Form.Group>
                                <Form.Group controlId="productWeight">
                                    <Form.Label>Вес</Form.Label>
                                    <Form.Control
                                        name={'productWeight'}
                                        type="text"
                                        placeholder="Введите вес товара"
                                        onChange={handleInput}
                                        value={good?.productWeight}
                                    />
                                </Form.Group>
                                <Form.Group controlId="productCategory">
                                    <Form.Label>Выберите категорию</Form.Label>
                                    <Form.Control
                                        name={'productCategory'}
                                        as="select" onChange={handleInput}
                                        defaultValue={good?.productCategory}>
                                        {categories?.map((el, index) =>
                                            <option
                                                className={'admin__option__input'}
                                                key={el + index}>{el}
                                            </option>
                                        )}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="productSubCategory">
                                    <Form.Label>Выберите подкатегорию</Form.Label>
                                    {subCategories
                                        ?.find(el => el?.cat === good?.productCategory)
                                        ?.subCat
                                        ?.map((el, index) =>
                                            <Form.Check
                                                type="checkbox"
                                                label={el}
                                                name={el}
                                                onChange={handleInput}
                                            />
                                        )}

                                </Form.Group>

                                <Form.Group controlId="productDescription">
                                    <Form.Label>Введите описание товара</Form.Label>
                                    <Form.Control as="textarea" name={'productDescription'} rows={3}
                                                  onChange={handleInput}
                                                  value={good?.productDescription}/>
                                </Form.Group>
                                <Form.Group controlId="productImage">
                                    <Form.Label>Загрузите фотографию товара</Form.Label>
                                    {good?.productImage && <img width={100} src={good?.productImage} alt="preview"/>}
                                    <Form.File
                                        name={"productImage"}
                                        onChange={handleInput}
                                    />
                                </Form.Group>
                            </Form>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                onClick={() => addNewDoc(good)}
                                className={''}
                                text={'Add'}
                            />
                        </Modal.Footer>
                    </>
                ) : (
                    <Modal.Body>
                        {error}
                    </Modal.Body>
                )}
            </Modal>
        </div>
    );
};

export default Index;