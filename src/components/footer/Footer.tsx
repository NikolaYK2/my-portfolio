import React from 'react';
import s from './Footer.module.scss';
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
        <section className={s.footer}>
            <div className={s.containerFooter}>
                <h3><span>N</span>ikolaj Kevlich</h3>
                <div className={s.containerSocial}>
                    {social.map((social, index) => {
                        return (
                            <div key={index} className={s.containerBlock}>
                                <a href={social.link}>
                                    <img src={social.icon} alt=""/>
                                </a>
                            </div>
                        );
                    })}
                </div>
                <p className='appGeneralDescription'>© Все права защищены</p>
            </div>
        </section>
    );
};

