import {IconSvg, IconSvgType} from "common/components/iconSvg/IconSvg";
import {memo} from "react";
import s from './Skill.module.scss'

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


  return (
    <div className={s.containerSkill}>
      <div className={s.icon}>
        {styleIcon.map((bracket, i) =>
          <div key={i} className={s.hoverIcon}>
            <IconSvg name={bracket}/>
          </div>
        )}
        <IconSvg name={skill.icon}/>
      </div>
      <p>{skill.title}</p>
    </div>
  );
});