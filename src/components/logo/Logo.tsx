import React from 'react';
import s from './Logo.module.scss';


export const Logo = (props:{title:string}) => {
    const {title} = props;
    return (
        <div className={s.logo}>
            <h3><span>{title[0]}</span>{title.slice(1,-1)}<span>{title[title.length-1]}</span></h3>
        </div>
    );
};
