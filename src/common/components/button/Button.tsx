import {m, Variant} from 'framer-motion';
import React, {ReactNode} from 'react';
import s from "./Button.module.scss";

type ButtonType = {
  children: ReactNode;
  disabled?: boolean,
  variantsAnimation?: Variant | {}
  visible?: boolean,
  onClick?: () => void
}
export const Button = ({ disabled, visible = true, variantsAnimation, children, onClick}: ButtonType) => {

  return (
    <>
      <m.button
        className={`${s.button}  ${disabled && s.disabled}`}
        disabled={disabled}
        variants={variantsAnimation ? variantsAnimation : {}}
        initial="hidden"
        animate={visible ? "visible" : 'hidden'}
        onClick={onClick}
      >
        {children}
      </m.button>
    </>
  );
};

