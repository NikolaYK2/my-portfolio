import {IconSvg, IconSvgType} from "common/components/iconSvg/IconSvg";
import {memo} from "react";
import s from './Skill.module.scss'
import {m} from "framer-motion"

type StyleIconType = IconSvgType
const styleIcon: StyleIconType[] = ["bracket{", "bracket{"]

type SkillType = {
  title: string,
  icon: IconSvgType,
}
type Props = {
  skill: SkillType,
}
export const Skill = memo(({skill}: Props) => {

  const item = {
    hidden: {y: 20, opacity: 0},
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
      <m.div className={`${s.containerSkill}`} variants={item}>
        <div className={s.icon}>
          {styleIcon.map((bracket, i) =>
            <div key={i} className={s.hoverIcon}>
              <IconSvg name={bracket}/>
            </div>
          )}
          <IconSvg name={skill.icon}/>
        </div>
        <p>{skill.title}</p>
      </m.div>
  );
});