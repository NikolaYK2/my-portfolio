import {domAnimation, LazyMotion, m} from "framer-motion";
import s from "./Craft.module.scss";
import React from "react";
import {IconSvg} from "common/components/iconSvg/IconSvg";
import {Waypoint} from "react-waypoint";
import {useWaypoint} from "common/hooks/useWaypoint";
import {itemVariants} from "features/2-main/ui/myCrafts/craft/CraftAnimation";

export type CraftLink = {
  label: string,
  href: string,
}

export type CraftFact = {
  label: string,
  value: string,
}

export type CraftData = {
  id: string,
  title: string,
  background: string,
  description: string,
  link?: string,
  links?: CraftLink[],
  tags?: string[],
  facts?: CraftFact[],
}
type CraftType = {
  crafts: CraftData,
  index: number
}
export const Craft = ({crafts, index}: CraftType) => {
  const {isVisible, waypointHandlerEnter} = useWaypoint()

  const selectedVariant = itemVariants[index % itemVariants.length];
  const actions = crafts.links ?? (crafts.link ? [{label: 'watch', href: crafts.link}] : []);
  const floatStyle = {
    '--float-delay': `${(index % 5) * 0.35}s`,
    '--float-duration': `${5.8 + (index % 4) * 0.55}s`,
    '--float-distance': `${6 + (index % 3) * 2}px`,
  } as React.CSSProperties;

  return (

    <LazyMotion features={domAnimation}>
      <Waypoint onEnter={waypointHandlerEnter} topOffset={'20%'} bottomOffset={'20%'}>
        <m.div className={`${s.containerCraft}`} variants={selectedVariant} initial="hidden"
               animate={isVisible ? 'visible' : 'hidden'} style={floatStyle}>
          <div className={s.floatLayer}>
            <div className={s.containerBackground} style={{backgroundImage: `url(${crafts.background})`}}>
              <div className={s.actions}>
                {actions.map((action) => (
                  <a key={action.href} href={action.href} target="_blank" rel="noreferrer">
                    <button type="button">{action.label}</button>
                  </a>
                ))}
              </div>
            </div>
            <div className={s.containerText}>
              <div className={s.blockItem}>
                <div className={s.craftName}>
                  <p>{crafts.title}</p>
                  <div className={s.icon}>
                    <IconSvg name={'description'}/>
                  </div>
                </div>
                {crafts.tags && (
                  <ul className={s.tags}>
                    {crafts.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                )}
                {crafts.facts && (
                  <dl className={s.facts}>
                    {crafts.facts.map((fact) => (
                      <React.Fragment key={fact.label}>
                        <dt>{fact.label}</dt>
                        <dd>{fact.value}</dd>
                      </React.Fragment>
                    ))}
                  </dl>
                )}
                <p className={s.craftDescription}>{crafts.description}</p>
              </div>
            </div>
          </div>
        </m.div>
      </Waypoint>
    </LazyMotion>
  );
};
