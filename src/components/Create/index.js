import React, {useState} from 'react';
import {Col, Form, Row, Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {saveItems} from "../../store/Items/actions"
import {Link} from "react-router-dom";



const Create = () => {
    const items = useSelector(state => state.item.items)
    const dispatch = useDispatch()
    const [options, setOptions] = useState([{title: "", content: ""}]);
    const [actions, setActions] = useState({sale: false, newOne: false, hit: false, recomend: false});
    const [full, setFull] = useState({
        title: "",
        price: "",
        oldPrice: "",
        price3: "",
        price5: "",
        price10: "",
        price30: "",
        price100: "",
        inStock: 0,
        picture: "",
        weight: "",
        type: 1,
        subType: 1,
    });

    const addOption = () => {
        options.push({title: "", content: ""})
        setOptions([...options])
    }

    const remOption = (index) => {
        if (options.length > 1) {
            options.splice(index, 1);
            setOptions([...options])
        }
    }

    const onChangeHandler = (e) => {
        if (e.target.type === "text") {
            full[e.target.name] = e.target.value
        } else {
            full[e.target.name] = parseInt(e.target.value)
        }
        setFull({...full})
    }
    const cancelHandler = () => {
        setFull({
            title: "",
            price: "",
            oldPrice: "",
            price3: "",
            price5: "",
            price10: "",
            price30: "",
            price100: "",
            inStock: 0,
            picture: "",
            weight: "",
            type: 1,
            subType: 1,
        })
        setOptions([{title: "", content: ""}])
        setActions({sale: false, newOne: false, hit: false, recomend: false})
    }
    const onSubmitHandler = (e) => {
        e.preventDefault()
        full.options = options;
        full.actions = actions;
        items.push(full);
        dispatch(saveItems([...items]))
        cancelHandler();
    }

    return (
        <div className={"create"}>
            <div className={"create__return"}>
                <Link to={`/`}>
                    <div>
                        <span>-- Return to Main page --</span>
                    </div>
                </Link>
            </div>
            <Form onSubmit={onSubmitHandler}>
                <Row>
                    <Form.Group as={Col} sm={6} controlId="formGroupTitle">
                        <Form.Label>??????????????????</Form.Label>
                        <Form.Control type="text" placeholder="title" name={"title"} onChange={onChangeHandler}
                                      value={full.title}/>
                    </Form.Group>
                    <Form.Group as={Col} sm={3} controlId="price">
                        <Form.Label>????????</Form.Label>
                        <Form.Control type="number" placeholder="price" name={"price"} onChange={onChangeHandler}
                                      value={full.price}/>
                    </Form.Group>
                    <Form.Group as={Col} sm={3} controlId="oldPrice">
                        <Form.Label>???????????? ????????</Form.Label>
                        <Form.Control type="number" placeholder="oldPrice" name={"oldPrice"} value={full.oldPrice}
                                      onChange={onChangeHandler}/>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} sm={2} controlId="price">
                        <Form.Label>???????? 3????</Form.Label>
                        <Form.Control type="number" placeholder="price" name={"price3"} onChange={onChangeHandler}
                                      value={full.price3}/>
                    </Form.Group>
                    <Form.Group as={Col} sm={2} controlId="price">
                        <Form.Label>???????? 5????</Form.Label>
                        <Form.Control type="number" placeholder="price" name={"price5"} onChange={onChangeHandler}
                                      value={full.price5}/>
                    </Form.Group>
                    <Form.Group as={Col} sm={2} controlId="price">
                        <Form.Label>???????? 10????</Form.Label>
                        <Form.Control type="number" placeholder="price" name={"price10"} onChange={onChangeHandler}
                                      value={full.price10}/>
                    </Form.Group>
                    <Form.Group as={Col} sm={2} controlId="price">
                        <Form.Label>???????? 30????</Form.Label>
                        <Form.Control type="number" placeholder="price" name={"price30"} onChange={onChangeHandler}
                                      value={full.price30}/>
                    </Form.Group>
                    <Form.Group as={Col} sm={2} controlId="price">
                        <Form.Label>???????? 100????</Form.Label>
                        <Form.Control type="number" placeholder="price" name={"price100"} onChange={onChangeHandler}
                                      value={full.price100}/>
                    </Form.Group>
                </Row>
                <Form.Group as={Row} controlId="available">
                    <Form.Label as={"legend"} column sm={2}>
                        ??????????????
                    </Form.Label>
                    <Col sm={10} onChange={onChangeHandler}>
                        <Form.Check label="?? ??????????????" type={"radio"} id={`inStock-1`} name={"inStock"} value={1}/>
                        <Form.Check label="?????? ??????????" type={"radio"} id={`inStock-2`} name={"inStock"} value={2}/>
                        <Form.Check label="?????? ?? ??????????????" type={"radio"} id={`inStock-0`} name={"inStock"} value={0}/>
                    </Col>
                </Form.Group>
                <Form.Group controlId="weight">
                    <Form.Label column sm={2}>??????????????</Form.Label>
                    <Col sm={3}>
                        <Form.Control type="text" placeholder="weight" name={"weight"} onChange={onChangeHandler}
                                      value={full.weight}/>
                    </Col>
                </Form.Group>
                <Row>
                    <Col sm={3}>
                        <Form.Group controlId="type">
                            <Form.Label>?????? ????????????</Form.Label>
                            <Form.Control as="select" name={"type"} onChange={onChangeHandler}>
                                <option value={1}>????????</option>
                                <option value={2}>??????????????????????</option>
                                <option value={3}>????????????????????????</option>
                                <option value={4}>??????????</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col sm={4}>
                        {full.type === 1 && <Form.Group controlId="subType">
                            <Form.Label>????????????</Form.Label>
                            <Form.Control as="select" name={"subType"} onChange={onChangeHandler}>
                                <option value={1}>??????????</option>
                                <option value={2}>?????????????? ????????</option>
                                <option value={3}>Speciality ????????</option>
                                <option value={4}>?????? ????????????</option>
                                <option value={5}>?????? ??????????????????</option>
                                <option value={6}>?????????????? ??????????????</option>
                                <option value={7}>???????????? ??????????????</option>
                                <option value={8}>Arabica mix</option>
                            </Form.Control>
                        </Form.Group>}

                        {full.type === 2 && <Form.Group controlId="subType">
                            <Form.Label>????????????</Form.Label>
                            <Form.Control as="select" name={"subType"} onChange={onChangeHandler}>
                                <option value={1}>?????? ?????? ????????????????????</option>
                                <option value={2}>?????? ?????? ????????????????????????</option>
                                <option value={3}>?????????? ?? ????????????????????</option>
                            </Form.Control>
                        </Form.Group>}

                        {full.type === 3 && <Form.Group controlId="subType">
                            <Form.Label>????????????</Form.Label>
                            <Form.Control as="select" name={"subType"} onChange={onChangeHandler}>
                                <option value={1}>????????????????????</option>
                                <option value={2}>??????????????????</option>
                                <option value={3}>??????????????</option>
                                <option value={4}>?????????????? ?????? ????????</option>
                                <option value={3}>??????????????????????????</option>
                                <option value={4}>??\?? ????????????????????????</option>
                            </Form.Control>
                        </Form.Group>}

                        {full.type === 4 && <Form.Group controlId="subType">
                            <Form.Label>????????????</Form.Label>
                            <Form.Control as="select" name={"subType"} onChange={onChangeHandler}>
                                <option value={1}>????????????????????</option>
                                <option value={2}>???????????? ????????????????????</option>
                            </Form.Control>
                        </Form.Group>}
                    </Col>

                </Row>
                <Form.Group controlId="actions">
                    <Form.Label>??????????????????????????:</Form.Label>
                    <Form.Check
                        type="switch"
                        id="sale"
                        label="????????????????????"
                        name={"sale"}
                        checked={actions.sale}
                        onChange={() => {
                            actions.sale = !actions.sale;
                            setActions({...actions})
                        }}
                    />
                    <Form.Check
                        type="switch"
                        label="??????????????"
                        id="newOne"
                        name={"newOne"}
                        checked={actions.newOne}
                        onChange={() => {
                            actions.newOne = !actions.newOne;
                            setActions({...actions})
                        }}
                    />
                    <Form.Check
                        type="switch"
                        label="?????????? ????????????"
                        id="hit"
                        name={"hit"}
                        checked={actions.hit}
                        onChange={() => {
                            actions.hit = !actions.hit;
                            setActions({...actions})
                        }}
                    />
                    <Form.Check
                        type="switch"
                        label="??????????????????????"
                        id="recomend"
                        name={"recomend"}
                        checked={actions.recomend}
                        onChange={() => {
                            actions.recomend = !actions.recomend;
                            setActions({...actions})
                        }}
                    />
                </Form.Group>

                <Form.Label>???????????????????? ????????????????</Form.Label>
                {options.map((elem, index) => {
                    return (
                        <Row key={index}>
                            <Row sm={12}>
                                {options.length > 1 && <Col className={"create__add"} md={1}>
                                    <span onClick={() => remOption(index)}>-</span>
                                </Col>}
                                <Form.Group as={Col} sm={5} controlId="optionTitle">
                                    <Form.Label>??????????????????</Form.Label>
                                    <Form.Control type="text"
                                                  placeholder="header"
                                                  name={"title"}
                                                  onChange={(e) => {
                                                      options[index].title = e.target.value
                                                      setOptions([...options])
                                                  }}
                                                  value={options[index].title}/>
                                </Form.Group>
                                <Form.Group as={Col} sm={5} controlId="optionText">
                                    <Form.Label>????????????????????</Form.Label>
                                    <Form.Control type="text"
                                                  placeholder="description"
                                                  className={"text-light"}
                                                  name={"content"}
                                                  onChange={(e) => {
                                                      options[index].content = e.target.value
                                                      setOptions([...options])
                                                  }}
                                                  value={options[index].content}/>
                                </Form.Group>
                                <Col className={"create__add"} md={1}>
                                    <span onClick={addOption}>+</span>
                                </Col>
                            </Row>
                        </Row>
                    )
                })}
                <Row>
                    <Col xs="auto" className="my-1">
                        <Button variant="outline-primary" type={"submit"}>??????????????????</Button>
                    </Col>
                    <Col xs="auto" className="my-1">
                        <Button variant="outline-warning" onClick={cancelHandler}>????????????</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );

};

export default Create;
