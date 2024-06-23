import {m, LazyMotion, domAnimation} from "framer-motion";
import s from "./Craft.module.scss";
import React from "react";

type Type = {
  id: string,
  title: string,
  background: string,
  description: string,
  link: string,
}
type CraftType = {
  crafts: Type,
}
export const Craft = (props: CraftType) => {
  const {crafts} = props

  const item = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1
    }
  };
  return (
    <LazyMotion features={domAnimation}>
      <m.div className={`${s.containerCraft}`} variants={item}>
        <div className={s.containerBackground} style={{backgroundImage: `url(${crafts.background})`}}>
          <a href={crafts.link}>
            <button>watch</button>
          </a>
        </div>
        <div className={s.containerText}>
          <p className='appGeneralTitle'>{crafts.title}</p>
          <p className='appGeneralDescription'>{crafts.description}</p>
        </div>
      </m.div>
    </LazyMotion>
  );
};
