import {domAnimation, LazyMotion, m} from "framer-motion";
import s from "./Craft.module.scss";
import React from "react";
import {IconSvg} from "common/components/iconSvg/IconSvg";
import {Waypoint} from "react-waypoint";
import {useWaypoint} from "common/hooks/useWaypoint";
import {itemVariants} from "features/2-main/ui/myCrafts/craft/CraftAnimation";

type Type = {
  id: string,
  title: string,
  background: string,
  description: string,
  link: string,
}
type CraftType = {
  crafts: Type,
  index: number
}
export const Craft = ({crafts, index}: CraftType) => {
  const {isVisible, waypointHandlerEnter} = useWaypoint()

  // Выбираем вариант на основе индекса
  const selectedVariant = itemVariants[index % itemVariants.length];
  return (

    <LazyMotion features={domAnimation}>
      <Waypoint onEnter={waypointHandlerEnter} topOffset={'20%'} bottomOffset={'20%'}>
        <m.div className={`${s.containerCraft}`} variants={selectedVariant} initial="hidden"
               animate={isVisible ? 'visible' : 'hidden'}>
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
      </Waypoint>
    </LazyMotion>
  );
};
