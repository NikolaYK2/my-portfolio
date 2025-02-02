import React, {ComponentPropsWithoutRef, forwardRef, ReactNode} from 'react';
import s from './Card.module.scss'
import {clsx} from "clsx";
import {domAnimation, LazyMotion, m} from "framer-motion";

type CardProps = {
  children: ReactNode;
  className?: string;
} & Omit<
  ComponentPropsWithoutRef<'section'>,// исключаем конфликтующее свойство
  | 'onAnimationStart'
  | 'onDragStart'
  | 'onDrag'
  | 'onDragEnd'
>;
export const Card = forwardRef<HTMLDivElement, CardProps>(({children, className, ...props}, ref) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.section
        variants={container}
        initial="hidden"
        animate="visible"
        className={clsx(s.card, className)} ref={ref} {...props}>
        {children}
      </m.section>

    </LazyMotion>
  );
});
const container = {
  hidden: {opacity: 1, scale: 0},
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};
