import React from 'react';
import s from './Footer.module.scss';
import lin from './linkedin.svg';
import git from './github.svg';
import telega from './telegram.svg';
import {Logo} from "../logo/Logo";

export const Footer = () => {

    const social = [
        {icon: git, link: 'https://github.com/NikolaYK2'},
        {icon: lin, link: 'https://www.linkedin.com/feed/'},
        {icon: telega, link: 'https://t.me/Nik_Kev'},
    ]
    return (
        <section className={s.footer}>
            <div className={s.containerFooter}>
                <Logo title={'Nik.'}/>
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
                <p className='appGeneralDescription'>© All Rights Reserved.</p>
            </div>
        </section>
    );
};

