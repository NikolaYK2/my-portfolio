import {m, Variant} from 'framer-motion';
import React, {useState} from 'react';
import s from "./Button.module.scss";

type ButtonType = {
  title: string,
  disabled?: boolean,
  variantsAnimation?:Variant | {}
  visible?:boolean,
}
export const Button = ({title, disabled, visible=true, variantsAnimation}: ButtonType) => {
  const [style, setStyle] = useState('')

  const off = () => {
    setStyle(s.modOff)
  }

  return (
    <>
      <m.button
        className={`${s.button} ${style} ${disabled && s.disabled}`}
        onMouseOut={off}
        disabled={disabled}
        variants={variantsAnimation ? variantsAnimation : {}}
        initial="hidden"
        animate={visible ? "visible" : 'hidden'}

      >
        {title}
      </m.button>
    </>
  );
};

