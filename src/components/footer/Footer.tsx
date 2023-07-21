import React from 'react';
import s from './Footer.module.scss';
import {Logo} from "common/components/logo/Logo";
import {IconSvg} from "../iconSvg/IconSvg";

export const Footer = () => {

    const social = [
        {id: 'github', link: 'https://github.com/NikolaYK2'},
        {id: 'linkedin', link: 'https://www.linkedin.com/feed/'},
        {id: 'telegram', link: 'https://t.me/Nik_Kev'},
    ]
    return (
        <section className={s.footer}>
            <div className={s.ss}>
                <div className={s.containerFooter}>
                    <Logo title={'Nik.'}/>
                    <div className={s.containerSocial}>
                        {social.map((social, index) => {
                            return (
                                <div key={index} className={s.containerBlock}>
                                    <a href={social.link}>
                                        <IconSvg id={social.id}/>
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                    <p>© All Rights Reserved.</p>
                </div>
            </div>

        </section>
    );
};

