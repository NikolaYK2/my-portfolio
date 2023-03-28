import React, {useState} from 'react';
import s from "./Button.module.scss";

type ButtonType = {
    title: string,
}
export const Button = (props: ButtonType) => {
    const {title} = props;
    const [style, setStyle] = useState('')

    const off = () => {
        setStyle(s.modOff)
    }

    return (
        <>
            <button className={`${s.button} ${style}`} onMouseOut={off}>{title}</button>
        </>
    );
};

