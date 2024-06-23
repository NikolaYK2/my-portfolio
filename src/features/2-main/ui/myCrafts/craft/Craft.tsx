import {m, LazyMotion, domAnimation} from "framer-motion";
import s from "./Craft.module.scss";
import React from "react";
import {IconSvg} from "common/components/iconSvg/IconSvg";

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
export const Craft = ({crafts}: CraftType) => {

  const item = {
    hidden: {scale: 0, opacity: 0},
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
          <div className={s.blockItem}>
            <div className={s.craftName}>
              <p>{crafts.title}</p>
              <div className={s.icon}>
                <IconSvg name={'description'}/>
              </div>
            </div>
            <p>{crafts.description}</p>
          </div>
        </div>
      </m.div>
    </LazyMotion>
  );
};
