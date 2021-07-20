import coffeBig from './Images/coffee-big.jpg'
import {saveItems} from "./store/Items/actions"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/Wrapper.scss"
import coffee1 from "./Images/gallery/coffee-img-3.jpeg";
import coffee2 from "./Images/gallery/coffee-img-4.jpeg";
import coffee3 from "./Images/gallery/coffee-img-6.jpeg";
import coffee4 from "./Images/gallery/coffee-img-7.jpeg";
import coffee5 from "./Images/gallery/coffee-img-9.jpeg";
import coffee6 from "./Images/gallery/coffee-img-8.jpeg";
import {useDispatch} from "react-redux";
import {useEffect, useMemo, useState} from "react";
import Routes from "./Routes";
import "./App.scss";
import {getCollection} from "./Helper/adminHelper";

function App() {
    // const [goodsFB, setGoodsFB] = useState([])
    // const dispatch = useDispatch();
    //
    // // const goods = useMemo(() => [
    // //     {
    // //         id: 1,
    // //         title: "Бразилия Сантос",
    // //         price: 70,
    // //         oldPrice: 75,
    // //         price3: 68,
    // //         price5: 66,
    // //         price10: 64,
    // //         price30: 62,
    // //         price100: 60,
    // //         inStock: 1, //or 0 or 3,
    // //         picture: coffee6,
    // //         weight: "250г",
    // //         type: 1,
    // //         subType: 1,
    // //         options: [
    // //             {
    // //                 title: "Состав",
    // //                 content: "100% Арабика"
    // //             },
    // //             {
    // //                 title: "Класс зерна",
    // //                 content: "Premium Coffee"
    // //             },
    // //             {
    // //                 title: "Регион", content: "Бразилия"
    // //             },
    // //             {
    // //                 title: "Форма",
    // //                 content: "Кофе собран со всего региона в Бразилии"
    // //             },
    // //             {
    // //                 title: "Разновидность арабики", content: "Caturra, Caturrai"
    // //             },
    // //             {
    // //                 title: "Высота выращивания",
    // //                 content: "1000 - 1200 н.у.м."
    // //             },
    // //             {
    // //                 title: "Обжарка", content: "Венская (средняя)"
    // //             },
    // //             {
    // //                 title: "Сенсорика",
    // //                 content: "Мягкий и нежный, выражены нотки молочного шоколада, ореха, на послевкусии легкая кислинка белого вина"
    // //             },
    // //             {
    // //                 title: "Рекомендованное приготовление",
    // //                 content: "Кофемашина, Турка, Гейзер, Чашка"
    // //             }],
    // //         actions: {
    // //             sale: true,
    // //             newOne: true,
    // //             hit: true,
    // //             recomend: true
    // //         }
    // //     },
    // //     {
    // //         id: 2,
    // //         title: "Бразилия Тос",
    // //         price: 90,
    // //         oldPrice: 95,
    // //         price3: 88,
    // //         price5: 86,
    // //         price10: 84,
    // //         price30: 82,
    // //         price100: 80,
    // //         inStock: 2,
    // //         picture: coffee2,
    // //         weight: "250г",
    // //         type: 1,
    // //         subType: 2,
    // //         options: [
    // //             {
    // //                 title: "Состав",
    // //                 content: "100% Арабика"
    // //             },
    // //             {
    // //                 title: "Класс зерна",
    // //                 content: "Premium Coffee"
    // //             },
    // //             {
    // //                 title: "Регион", content: "Бразилия"
    // //             },
    // //             {
    // //                 title: "Форма",
    // //                 content: "Кофе собран со всего региона в Бразилии"
    // //             },
    // //             {
    // //                 title: "Разновидность арабики", content: "Caturra, Caturrai"
    // //             },
    // //             {
    // //                 title: "Высота выращивания",
    // //                 content: "1000 - 1200 н.у.м."
    // //             },
    // //             {
    // //                 title: "Обжарка", content: "Венская (средняя)"
    // //             },
    // //             {
    // //                 title: "Сенсорика",
    // //                 content: "Мягкий и нежный, выражены нотки молочного шоколада, ореха, на послевкусии легкая кислинка белого вина"
    // //             },
    // //             {
    // //                 title: "Рекомендованное приготовление",
    // //                 content: "Кофемашина, Турка, Гейзер, Чашка"
    // //             }],
    // //         actions: {
    // //             sale: true,
    // //             newOne: false,
    // //             hit: false,
    // //             recomend: false
    // //         }
    // //     },
    // //     {
    // //         id: 3,
    // //         title: "Бразилия",
    // //         price: 100,
    // //         oldPrice: null,
    // //         price3: 98,
    // //         price5: 96,
    // //         price10: 94,
    // //         price30: 92,
    // //         price100: 90,
    // //         inStock: 1,
    // //         picture: coffee3,
    // //         weight: "250г",
    // //         type: 1,
    // //         subType: 3,
    // //         options: [
    // //             {
    // //                 title: "Состав",
    // //                 content: "100% Арабика"
    // //             },
    // //             {
    // //                 title: "Класс зерна",
    // //                 content: "Premium Coffee"
    // //             },
    // //             {
    // //                 title: "Регион", content: "Бразилия"
    // //             },
    // //             {
    // //                 title: "Форма",
    // //                 content: "Кофе собран со всего региона в Бразилии"
    // //             },
    // //             {
    // //                 title: "Разновидность арабики", content: "Caturra, Caturrai"
    // //             },
    // //             {
    // //                 title: "Высота выращивания",
    // //                 content: "1000 - 1200 н.у.м."
    // //             },
    // //             {
    // //                 title: "Обжарка", content: "Венская (средняя)"
    // //             },
    // //             {
    // //                 title: "Сенсорика",
    // //                 content: "Мягкий и нежный, выражены нотки молочного шоколада, ореха, на послевкусии легкая кислинка белого вина"
    // //             },
    // //             {
    // //                 title: "Рекомендованное приготовление",
    // //                 content: "Кофемашина, Турка, Гейзер, Чашка"
    // //             }],
    // //         actions: {
    // //             sale: false,
    // //             newOne: true,
    // //             hit: false,
    // //             recomend: false
    // //         }
    // //     },
    // //     {
    // //         id: 4,
    // //         title: "Сантос qqqqqqqqq qqq",
    // //         price: 50,
    // //         oldPrice: 60,
    // //         price3: 48,
    // //         price5: 46,
    // //         price10: 44,
    // //         price30: 42,
    // //         price100: 40,
    // //         inStock: 2,
    // //         picture: coffee4,
    // //         weight: "250г",
    // //         type: 1,
    // //         subType: 4,
    // //         options: [
    // //             {
    // //                 title: "Состав",
    // //                 content: "100% Арабика"
    // //             },
    // //             {
    // //                 title: "Класс зерна",
    // //                 content: "Premium Coffee"
    // //             },
    // //             {
    // //                 title: "Регион", content: "Бразилия"
    // //             },
    // //             {
    // //                 title: "Форма",
    // //                 content: "Кофе собран со всего региона в Бразилии"
    // //             },
    // //             {
    // //                 title: "Разновидность арабики", content: "Caturra, Caturrai"
    // //             },
    // //             {
    // //                 title: "Высота выращивания",
    // //                 content: "1000 - 1200 н.у.м."
    // //             },
    // //             {
    // //                 title: "Обжарка", content: "Венская (средняя)"
    // //             },
    // //             {
    // //                 title: "Сенсорика",
    // //                 content: "Мягкий и нежный, выражены нотки молочного шоколада, ореха, на послевкусии легкая кислинка белого вина"
    // //             },
    // //             {
    // //                 title: "Рекомендованное приготовление",
    // //                 content: "Кофемашина, Турка, Гейзер, Чашка"
    // //             }],
    // //         actions: {
    // //             sale: false,
    // //             newOne: false,
    // //             hit: true,
    // //             recomend: false
    // //         }
    // //     },
    // //     {
    // //         id: 5,
    // //         title: "Браз Сан",
    // //         price: 49,
    // //         oldPrice: 50,
    // //         price3: 47,
    // //         price5: 45,
    // //         price10: 43,
    // //         price30: 41,
    // //         price100: 39,
    // //         inStock: 0,
    // //         picture: coffee5,
    // //         weight: "250г",
    // //         type: 1,
    // //         subType: 5,
    // //         options: [
    // //             {
    // //                 title: "Состав",
    // //                 content: "100% Арабика"
    // //             },
    // //             {
    // //                 title: "Класс зерна",
    // //                 content: "Premium Coffee"
    // //             },
    // //             {
    // //                 title: "Регион", content: "Бразилия"
    // //             },
    // //             {
    // //                 title: "Форма",
    // //                 content: "Кофе собран со всего региона в Бразилии"
    // //             },
    // //             {
    // //                 title: "Разновидность арабики", content: "Caturra, Caturrai"
    // //             },
    // //             {
    // //                 title: "Высота выращивания",
    // //                 content: "1000 - 1200 н.у.м."
    // //             },
    // //             {
    // //                 title: "Обжарка", content: "Венская (средняя)"
    // //             },
    // //             {
    // //                 title: "Сенсорика",
    // //                 content: "Мягкий и нежный, выражены нотки молочного шоколада, ореха, на послевкусии легкая кислинка белого вина"
    // //             },
    // //             {
    // //                 title: "Рекомендованное приготовление",
    // //                 content: "Кофемашина, Турка, Гейзер, Чашка"
    // //             }],
    // //         actions: {
    // //             sale: false,
    // //             newOne: false,
    // //             hit: false,
    // //             recomend: true
    // //         }
    // //     },
    // //     {
    // //         id: 6,
    // //         title: "Бразилия Сан",
    // //         price: 80,
    // //         oldPrice: null,
    // //         price3: 78,
    // //         price5: 76,
    // //         price10: 74,
    // //         price30: 72,
    // //         price100: 70,
    // //         inStock: 0,
    // //         picture: coffee1,
    // //         weight: "250г",
    // //         type: 1,
    // //         subType: 6,
    // //         options: [
    // //             {
    // //                 title: "Состав",
    // //                 content: "100% Арабика"
    // //             },
    // //             {
    // //                 title: "Класс зерна",
    // //                 content: "Premium Coffee"
    // //             },
    // //             {
    // //                 title: "Регион", content: "Бразилия"
    // //             },
    // //             {
    // //                 title: "Форма",
    // //                 content: "Кофе собран со всего региона в Бразилии"
    // //             },
    // //             {
    // //                 title: "Разновидность арабики", content: "Caturra, Caturrai"
    // //             },
    // //             {
    // //                 title: "Высота выращивания",
    // //                 content: "1000 - 1200 н.у.м."
    // //             },
    // //             {
    // //                 title: "Обжарка", content: "Венская (средняя)"
    // //             },
    // //             {
    // //                 title: "Сенсорика",
    // //                 content: "Мягкий и нежный, выражены нотки молочного шоколада, ореха, на послевкусии легкая кислинка белого вина"
    // //             },
    // //             {
    // //                 title: "Рекомендованное приготовление",
    // //                 content: "Кофемашина, Турка, Гейзер, Чашка"
    // //             }],
    // //         actions: {
    // //             sale: false,
    // //             newOne: false,
    // //             hit: true,
    // //             recomend: true
    // //         }
    // //     },
    // //     {
    // //         id: 7,
    // //         title: "Браз Сан",
    // //         price: 49,
    // //         oldPrice: 50,
    // //         price3: 47,
    // //         price5: 45,
    // //         price10: 43,
    // //         price30: 41,
    // //         price100: 39,
    // //         inStock: 2,
    // //         picture: coffee5,
    // //         weight: "250г",
    // //         type: 7,
    // //         subType: 1,
    // //         options: [
    // //             {
    // //                 title: "Состав",
    // //                 content: "100% Арабика"
    // //             },
    // //             {
    // //                 title: "Класс зерна",
    // //                 content: "Premium Coffee"
    // //             },
    // //             {
    // //                 title: "Регион", content: "Бразилия"
    // //             },
    // //             {
    // //                 title: "Форма",
    // //                 content: "Кофе собран со всего региона в Бразилии"
    // //             },
    // //             {
    // //                 title: "Разновидность арабики", content: "Caturra, Caturrai"
    // //             },
    // //             {
    // //                 title: "Высота выращивания",
    // //                 content: "1000 - 1200 н.у.м."
    // //             },
    // //             {
    // //                 title: "Обжарка", content: "Венская (средняя)"
    // //             },
    // //             {
    // //                 title: "Сенсорика",
    // //                 content: "Мягкий и нежный, выражены нотки молочного шоколада, ореха, на послевкусии легкая кислинка белого вина"
    // //             },
    // //             {
    // //                 title: "Рекомендованное приготовление",
    // //                 content: "Кофемашина, Турка, Гейзер, Чашка"
    // //             }],
    // //         actions: {
    // //             sale: true,
    // //             newOne: true,
    // //             hit: false,
    // //             recomend: false
    // //         }
    // //     },
    // //     {
    // //         id: 8,
    // //         title: "Бразилия Сан77777",
    // //         price: 80,
    // //         oldPrice: null,
    // //         price3: 78,
    // //         price5: 76,
    // //         price10: 74,
    // //         price30: 72,
    // //         price100: 70,
    // //         inStock: 1,
    // //         picture: coffee1,
    // //         weight: "250г",
    // //         type: 1,
    // //         subType: 8,
    // //         options: [
    // //             {
    // //                 title: "Состав",
    // //                 content: "100% Арабика"
    // //             },
    // //             {
    // //                 title: "Класс зерна",
    // //                 content: "Premium Coffee"
    // //             },
    // //             {
    // //                 title: "Регион", content: "Бразилия"
    // //             },
    // //             {
    // //                 title: "Форма",
    // //                 content: "Кофе собран со всего региона в Бразилии"
    // //             },
    // //             {
    // //                 title: "Разновидность арабики", content: "Caturra, Caturrai"
    // //             },
    // //             {
    // //                 title: "Высота выращивания",
    // //                 content: "1000 - 1200 н.у.м."
    // //             },
    // //             {
    // //                 title: "Обжарка", content: "Венская (средняя)"
    // //             },
    // //             {
    // //                 title: "Сенсорика",
    // //                 content: "Мягкий и нежный, выражены нотки молочного шоколада, ореха, на послевкусии легкая кислинка белого вина"
    // //             },
    // //             {
    // //                 title: "Рекомендованное приготовление",
    // //                 content: "Кофемашина, Турка, Гейзер, Чашка"
    // //             }],
    // //         actions: {
    // //             sale: false,
    // //             newOne: true,
    // //             hit: false,
    // //             recomend: true
    // //         }
    // //     },
    // //     {
    // //         id: 9,
    // //         title: "Бразилия Сан777",
    // //         price: 80,
    // //         oldPrice: null,
    // //         price3: 78,
    // //         price5: 76,
    // //         price10: 74,
    // //         price30: 72,
    // //         price100: 70,
    // //         inStock: 0,
    // //         picture: coffee1,
    // //         weight: "250г",
    // //         type: 1,
    // //         subType: 2,
    // //         options: [
    // //             {
    // //                 title: "Состав",
    // //                 content: "100% Арабика"
    // //             },
    // //             {
    // //                 title: "Класс зерна",
    // //                 content: "Premium Coffee"
    // //             },
    // //             {
    // //                 title: "Регион", content: "Бразилия"
    // //             },
    // //             {
    // //                 title: "Форма",
    // //                 content: "Кофе собран со всего региона в Бразилии"
    // //             },
    // //             {
    // //                 title: "Разновидность арабики", content: "Caturra, Caturrai"
    // //             },
    // //             {
    // //                 title: "Высота выращивания",
    // //                 content: "1000 - 1200 н.у.м."
    // //             },
    // //             {
    // //                 title: "Обжарка", content: "Венская (средняя)"
    // //             },
    // //             {
    // //                 title: "Сенсорика",
    // //                 content: "Мягкий и нежный, выражены нотки молочного шоколада, ореха, на послевкусии легкая кислинка белого вина"
    // //             },
    // //             {
    // //                 title: "Рекомендованное приготовление",
    // //                 content: "Кофемашина, Турка, Гейзер, Чашка"
    // //             }],
    // //         actions: {
    // //             sale: true,
    // //             newOne: false,
    // //             hit: true,
    // //             recomend: false
    // //         }
    // //     }
    // // ], [])
    // useEffect(() => {
    //     getCollection('goods')
    //         .then(r => {
    //             setGoodsFB(r)
    //         })
    //         .catch(e => console.log(e))
    // }, [])

    //
    // useEffect(() => {
    //     dispatch(saveItems(goodsFB))
    // }, [dispatch, goodsFB])

    return (
        <div className="App">
            <Routes/>
        </div>
    );
}

export default App;
