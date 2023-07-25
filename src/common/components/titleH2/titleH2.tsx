import React, {memo} from 'react';
import s from './titleH2.module.scss'

type TitleH2Type = {
    title: string,
    ref?:any,
}
export const TitleH2 = memo((props: TitleH2Type) => {

    return (
        <>
            <h2 className={s.title}>{props.title}</h2>
        </>
    );
});
