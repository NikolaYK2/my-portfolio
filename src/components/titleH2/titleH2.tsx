import React from 'react';
import s from './titleH2.module.scss'

type TitleH2Type={
    title:string,
}
export const TitleH2 = (props:TitleH2Type) => {
    return (
        <>
            <h2 className={s.title}>{props.title}</h2>
        </>
    );
};
