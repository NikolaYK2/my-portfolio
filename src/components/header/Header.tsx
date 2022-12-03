import React from 'react';
import s from './Header.module.css';

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.headerContainer}>
                <p><span>N</span>ikolaj Kevlich</p>
                <nav className={s.headerNav}>
                    <ul>
                        <li><a href={'#wrap'}>Home</a></li>
                        <li><a href={'#skills'}>Skills</a></li>
                        <li><a href={'#crafts'}>Works</a></li>
                        <li><a href={'#contact'}>Contacts</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

