import React, {useState} from 'react';
import s from "./Button.module.scss";

type ButtonType = {
  title: string,
  disabled?: boolean,
}
export const Button = ({title, disabled}: ButtonType) => {
  const [style, setStyle] = useState('')

  const off = () => {
    setStyle(s.modOff)
  }

  return (
    <>
      <button className={`${s.button} ${style} ${disabled && s.disabled}`} onMouseOut={off} disabled={disabled}>{title}</button>
    </>
  );
};

