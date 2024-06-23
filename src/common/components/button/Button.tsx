import {m, Variant} from 'framer-motion';
import React, {ReactNode} from 'react';
import s from "./Button.module.scss";

type ButtonType = {
  children: ReactNode;
  disabled?: boolean,
  variantsAnimation?: Variant | {}
  visible?: boolean,
}
export const Button = ({ disabled, visible = true, variantsAnimation, children}: ButtonType) => {


  return (
    <>
      <m.button
        className={`${s.button}  ${disabled && s.disabled}`}
        disabled={disabled}
        variants={variantsAnimation ? variantsAnimation : {}}
        initial="hidden"
        animate={visible ? "visible" : 'hidden'}

      >
        {children}
      </m.button>
    </>
  );
};

