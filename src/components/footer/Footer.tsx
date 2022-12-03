import React from 'react';
import s from './Footer.module.css';
import vk from './vk.png';
import fc from './facebook.png';
import lin from './linkedin.png';

export const Footer = () => {

    const social = [
        {icon: vk, link: 'https://vk.com/'},
        {icon: lin, link: 'https://ru.linkedin.com/'},
        {icon: fc, link: 'https://www.facebook.com/'},
    ]
    return (
        <div className={s.footer}>
            <div className={s.containerFooter}>
                <h3 className='appGeneralTitle'><span>N</span>ikolaj Kevlich</h3>
                <div className={s.containerSocial}>
                    {social.map((soc, index) => {
                        return (
                            <div key={index} className={s.containerBlock}>
                                <a href={soc.link}>
                                    <img src={soc.icon} alt=""/>
                                </a>
                            </div>
                        );
                    })}
                </div>
                <p className='appGeneralDescription'>© Все права защищены</p>
            </div>
        </div>
    );
};

