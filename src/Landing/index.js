// import './Landinn.scss'
// import Svg from '../Components/Svg/Svg'
// import Logo from '../Components/Svg/Images/Stella'
// import CoffeePlant from "../Components/Svg/Images/CoffeePlant";
// import CoffeePlant2 from "../Components/Svg/Images/CoffeePlant2"
// import Menu from "../Components/Svg/Images/Menu";
// import Phone from "../Components/Svg/Images/Phone";
// import man from '../Images/prihodko.png'
//
// import FirstPage from '../Components/Pages/FirstPage'
// import SecondPage from '../Components/Pages/SecondPage'
// import Card from '../Components/Cards/Card'
// import ModalCard from '../Components/ModalCard'
// import CartList from '../Components/CartList'
// import FilterProductsBlock from '../Components/FilterProductsBlock'
// import ContactBlock from '../Components/ContactBlock'
// import PreloaderAnimation from '../Components/PreloaderAnimation'
// import {useEffect, useState} from "react";
// import Description from "../Components/Description";
// import Mission from "../Components/Mission";
// import imgGal from "../Images/coffeecard.png"
// import Navigation from "../Components/Navigation"
//
// const getVW = (val) => {
//     return window.innerWidth / 100 * val
// };
// const getVH = (val) => {
//     return window.innerHeight / 100 * val
// };
// const scrollMargin = 150;
//
// const App = () => {
//     const [left, setLeft] = useState(35 + "%");
//     const [width, setWidth] = useState(30 + "%");
//     useEffect(() => {
//         window.addEventListener("scroll", (e) => scrollHandle(e))
//     }, []);
//     const scrollHandle = (e) => {
//         const scroll = e.path[1].scrollY;
//         if (scroll > 0 && scroll < window.innerHeight - scrollMargin) {
//             if (width !== 30 + '%') {
//                 setLeft(35 + '%');
//                 setWidth(30 + '%');
//             }
//         } else if (scroll > window.innerHeight - scrollMargin && scroll < window.innerHeight * 2 - scrollMargin * 2) {
//             if (width !== 55 + '%') {
//                 setLeft("calc(45% - " + getVW(6) + "px - " + getVH(0) + "px)");
//                 setWidth(55 + '%')
//             }
//         } else if (scroll > window.innerHeight * 2 - scrollMargin * 2 && scroll < window.innerHeight * 3) {
//             if (width !== 77 + '%') {
//                 setLeft(23 + "%")
//                 setWidth(77 + '%')
//             }
//         } else if (scroll > window.innerHeight * 3 - scrollMargin && scroll < window.innerHeight * 4) {
//             if (width !== 58 + '%') {
//                 setLeft(42 + "%")
//                 setWidth(58 + '%')
//             }
//         } else if (scroll > window.innerHeight * 4) {
//             if (width !== 120 + '%') {
//                 setLeft(0 + "%")
//                 setWidth(120 + '%')
//             }
//         }
//
//     };
//
//     return (
//         <div className={"LandingContainer"}>
//
//
//             {/*<PreloaderAnimation/>*/}
//             {/*<div className={"MenuContainer"}>*/}
//             {/*    <div id={"line1"}></div>*/}
//             {/*    <Svg*/}
//             {/*        className={'PositionMenuSvg'}*/}
//             {/*        viewBox={'-10 -10 400.97 400.97'}*/}
//             {/*        path={<Menu/>}*/}
//             {/*    />*/}
//             {/*    <Svg*/}
//             {/*        className={'PositionPhoneSvg'}*/}
//             {/*        viewBox={'-10 -10 525.709 525.709'}*/}
//             {/*        path={<Phone/>}*/}
//             {/*    />*/}
//             {/*</div>*/}
//
//
//             <div className={"innerContainer"}>
//                 <Navigation/>
//                 <FirstPage/>
//                 <SecondPage/>
//                 <div className={"ThirdContainer"}>
//                     <FilterProductsBlock/>
//                     <div className={"MotivatedContainer"}>
//                         <p className={'MotivatedPhrase'}>Закажи сейчас и уже завтра товар будет у тебя</p>
//                         <div className={'BottomCardBlock'}>
//                             <div className={'FinalProvisionsCard'}>
//                                 <h3>Оплата</h3>
//                                 <p>Наличными при самовывозе. Безналичный расчет (р/с для ООО, ФОП). Наложенный платеж
//                                     при получении товара. Оплата картой </p>
//                             </div>
//                             <div className={'FinalProvisionsCard'}>
//                                 <h3>Доставка</h3>
//                                 <p>Наличными при самовывозе. Безналичный расчет (р/с для ООО, ФОП). Наложенный платеж
//                                     при получении товара. Оплата картой </p>
//                             </div>
//                             <div className={'FinalProvisionsCard'}>
//                                 <h3>Гарантия</h3>
//                                 <p>Наличными при самовывозе. Безналичный расчет (р/с для ООО, ФОП). Наложенный платеж
//                                     при получении товара. Оплата картой </p>
//                             </div>
//                         </div>
//                     </div>
//
//
//                     <ContactBlock/>
//
//
//                     <ModalCard/>
//                     <CartList/>
//                     <Description/>
//                     <Mission title={"Наш продукт предназначен для:"}/>
//
//                 </div>
//
//
//             </div>
//
//
//             {/*<div id={"square1"} style={{left: left, width: width}}></div>*/}
//
//         </div>
//     )
// };
// export default App