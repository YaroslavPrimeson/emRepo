import React, {useState} from 'react';
import Logo from "../../Images/logo/LogoEmily.svg"
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch, faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'
import {showCart} from "../../store/Cart/actions";
import {Dropdown, DropdownButton} from "react-bootstrap";


const Navigation = ({variant}) => {
    const [hide, setHide] = useState("navigation__hide");
    const [openContacts, setOpenContacts] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const [searchContent, setSearchContent] = useState("")
    const dispatch = useDispatch()
    const arrowIcon = <FontAwesomeIcon icon={faArrowCircleRight}/>

    const searchAction = () => {
        setShowSearch(false)
        alert(`Searching ${searchContent}`)
        setSearchContent("")
    }
    const hideHandler = () => {
        setHide(hide === "navigation__hide" ? "" : "navigation__hide");
    }

    const searchChangeHandler = (e) => {
        setSearchContent(e.target.value)
    }

    const cart = useSelector(state => state.cart.cart)

    /********************************************************************
     * RENDER
     ********************************************************************/
    return (
        <div className="navigation__wrapper">
            <div className="navigation">
                <div className="navigation__logo">
                    <a href="#main">
                        <img className={"main__logo__img"} src={Logo} alt="logo"/>
                    </a>
                </div>
                <div className="navigation__menu">
                    <div className="navigation__icon navigation-icon">
                        <div className="navigation-icon__lines" onClick={hideHandler}>
                            <div className="navigation-icon__line"></div>
                            <div className="navigation-icon__line navigation-icon__line_middle-margin"></div>
                            <div className="navigation-icon__line"></div>
                        </div>
                    </div>

                    <ul className={`navigation__items ${hide}`}>
                        <li className="navigation__item" onClick={() => setHide("navigation__hide")}>
                            <a href={variant === 'main' ? `#main` : `/#main`}>Главная</a>
                        </li>
                        <li className="navigation__item" onClick={() => setHide("navigation__hide")}>
                            <a href={variant === 'main' ? "#about" : "/#about"}>О Нас</a>
                        </li>
                        {variant === 'main' &&
                        <li className="navigation__item" onClick={() => setHide("navigation__hide")}>
                            <a href={"/shop"}>Магазин</a>
                            <div onClick={() => console.log('+')}>+</div>
                        </li>}
                        <li className="navigation__item" onClick={() => setHide("navigation__hide")}>
                            <a href={variant === 'main' ? "#help" : "/#help"}>Бренды</a>
                        </li>
                        <li className="navigation__item" onClick={() => setHide("navigation__hide")}>
                            <a href={variant === 'main' ? "#courier" : "/#courier"}>Отзывы/ Блог</a>
                        </li>
                        <li className="navigation__item" onClick={() => setHide("navigation__hide")}>
                            <a href={variant === 'main' ? "#contacts" : "/#contacts"}>Доставка и оплата</a>
                        </li>
                        <li className="navigation__item" onClick={() => setHide("navigation__hide")}>
                            <a href={variant === 'main' ? "#contacts" : "/#contacts"}>Контакты</a>
                        </li>

                        <li className="navigation__item__services">
                            {variant !== 'main' &&
                            <div className={"navigation__search__icon"} onClick={(e) => {
                                // setHide("navigation__hide")
                                if (!e.target.classList.contains("navigation__item--input")) {
                                    setShowSearch(!showSearch)
                                }
                            }}>
                            </div>
                            }
                            <div className="navigation__services">
                                <div className="navigation__cart" onClick={() => dispatch(showCart(true))}>
                                    <div className="navigation__cart--val">{cart.length}</div>
                                </div>
                            </div>
                            {showSearch &&
                            <div className={"navigation__search"}>
                                <div className={"navigation__search__input__block"}>
                                    <input className={"navigation__item--input"}
                                           type="text" placeholder={"Поиск"}
                                           value={searchContent}
                                           onChange={searchChangeHandler}
                                    />
                                    <div className={"navigation__search--action"}
                                         onClick={searchAction}>{arrowIcon}
                                    </div>

                                    <div className={'navigation__contacts__aside__close'}
                                         onClick={() => setShowSearch(!showSearch)}>
                                    </div>

                                </div>
                            </div>}
                        </li>
                    </ul>
                </div>

                <div className={'navigation__contacts'}>
                    <div className={'navigation__contacts__menu'} onClick={() => setOpenContacts(!openContacts)}>
                        <div className={'navigation__contacts__animation navigation__contacts__animation__first'}>
                        </div>
                        <div
                            className={'navigation__contacts__animation navigation__contacts__animation__second'}>
                        </div>
                        <div className={'navigation__contacts__animation navigation__contacts__animation__third'}>
                        </div>
                        <div
                            className={'navigation__contacts__animation navigation__contacts__animation__fourth'}>
                        </div>
                        {openContacts &&
                            <div className="test">
                                <div onClick={(e)=>e.stopPropagation()} className={'navigation__contacts__aside RollingRightToLeft'}>
                                    <div className={'navigation__contacts__aside__block'}>
                                        <div className={'navigation__contacts__aside__close'}
                                             onClick={() => setOpenContacts(!openContacts)}>
                                        </div>
                                        <div className={"dropdown__container"}>
                                            <DropdownButton className={'dropdown__container__btn'} id="dropdown-basic-button" title="Dropdown button">
                                                <DropdownButton  id="dropdown-basic-button" title="Волосы">
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                </DropdownButton>
                                                <Dropdown.Divider />
                                                <DropdownButton id="dropdown-basic-button" title="Лицо">
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                </DropdownButton>
                                                <Dropdown.Divider />
                                                <DropdownButton id="dropdown-basic-button" title="Для тела">
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                </DropdownButton>
                                                <Dropdown.Divider />
                                                <DropdownButton id="dropdown-basic-button" title="Мужчинам">
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                </DropdownButton>
                                                <Dropdown.Divider />
                                                <DropdownButton id="dropdown-basic-button" title="Дети">
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                </DropdownButton>
                                                <Dropdown.Divider />
                                                <DropdownButton id="dropdown-basic-button" title="Здоровье">
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                </DropdownButton>
                                                <Dropdown.Divider />
                                                <DropdownButton id="dropdown-basic-button" title="Парфюмерия">
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                </DropdownButton>
                                                <Dropdown.Divider />

                                            </DropdownButton>
                                        </div>
                                    </div>
                                </div>
                                        {/*<img src={Logo} alt="logo"/>*/}
                                        {/*<div className={'navigation__contacts__aside__title'}>свежей обжарки</div>*/}
                                        {/*<div className={'navigation__contacts__aside__address'}>Украина, г. Киев, ул.*/}
                                        {/*    Шахтерская, 9*/}
                                        {/*</div>*/}
                                        {/*<div className={'navigation__contacts__aside__phone'}>0800 000 000</div>*/}
                                        {/*<div>Facebook</div>*/}
                                        {/*<div>Instagram</div>*/}
                                    </div>

                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;