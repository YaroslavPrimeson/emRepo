import React from 'react';
import HeaderBlock from '../HeaderBlock'
import Media from 'react-media';

const Footer = () => {
    return (
        <div className="footer">
            <Media queries={{
                small: "(max-width: 767px)",
                medium: "(min-width: 768px) and (max-width: 1023px)",
                large: "(min-width: 1024px)"
            }}>{
                matches =>
                    (<div className="footer__wrapper">
                        <div className="footer__contacts">
                            <p>Украина, г.Киев, Шахтерская 9</p>
                            <p>+380&nbsp;63&nbsp;660&nbsp;47&nbsp;93</p>
                            <p>barista.kievx@gmail.com</p>
                        </div>

                        {!matches.small && <HeaderBlock small title={'Контакты'}></HeaderBlock>}
                        {matches.small && <div className="footer__title">Контакты</div>}

                        <div className="footer__schedule">
                            <p>Время работы:</p>
                            <p>Пн-Пт. 9:00 - 20:00</p>
                            <p>Cб. 11:00 - 15:00</p>
                            <p>Вс. Выходной</p>
                        </div>
                    </div>)
            }
            </Media>
        </div>
    );
};

export default Footer;
