import React from 'react';
import s from './Header.module.css';

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.headerContainer}>
                <p><span>N</span>ikolaj Kevlich</p>
                <nav className={s.headerNav}>
                    <ul>
                        <li><a href="">Главная</a></li>
                        <li><a href="">Скиллы</a></li>
                        <li><a href="">Работы</a></li>
                        <li><a href="">Контакты</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

