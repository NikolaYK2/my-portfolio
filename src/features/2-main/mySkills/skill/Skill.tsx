import {IconSvg, IconSvgType} from "common/components/iconSvg/IconSvg";
import {memo, useCallback, useEffect, useState} from "react";
import {animationOnScroll} from "common/utils/animateOnScroll";
import s from './Skill.module.scss'

type Type = {
  id: string,
  title: string,
  icon: IconSvgType,
  description: string
}
type SkillType = {
  skill: Type,
  switchOn: (idSkill: string) => void,
  switchOff: () => void,
}
export const Skill = memo((props: SkillType) => {
  const {skill, switchOn, switchOff} = props;
  const [style, setStyle] = useState('');

  const on = useCallback((id: string) => {
    switchOn(id);
    setStyle(s.mod);
  }, [])
  const off = useCallback(() => {
    switchOff();
    setStyle(s.modReverse);
  }, [])
  console.log('render')

  useEffect(() => {
    animationOnScroll(`.${s.containerItem}`, s.shellAnim);
  }, [])

  return (
    <div className={s.shellContainerItem} onMouseOver={() => on(skill.id)} onMouseOut={off}>
      <div className={s.containerItem}>
        {skill.icon
          ? <div className={`${s.containerImg} ${s.mod}`}>
            <IconSvg name={skill.icon}/>
            <p>{skill.title}</p>
          </div>
          :
          <div className={`${s.containerText} ${style}`}>
            <p>{skill.title}</p>
            <p>{skill.description}</p>
          </div>
        }
      </div>
    </div>
  );
});