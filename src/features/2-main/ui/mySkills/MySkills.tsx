import React, {memo, useCallback, useRef, useState} from 'react';
import s from './MySkills.module.scss';
import {v1} from "uuid";
import {TitleH2} from "common/components/titleH2/titleH2";
import {IconSvgType} from "common/components/iconSvg/IconSvg";
import {Skill} from "features/2-main/ui/mySkills/skill/Skill";

type Timout = ReturnType<typeof setTimeout>
type MySkillsType = {
  id: string
}
type SkillsType = {
  id: string;
  title: string;
  icon: IconSvgType;
  description: string;
}
export const MySkills = memo((props: MySkillsType) => {
  const [skills, setSkills] = useState<SkillsType[]>(
    [
      {id: v1(), title: 'HTML', icon: 'html5', description: 'Google translator rules'},
      {id: v1(), title: 'CSS', icon: 'css3', description: 'My react is lame somewhere'},
      {id: v1(), title: 'JAVASCRIPT', icon: 'js', description: 'I also translated this in google translator.'},
      {id: v1(), title: 'TYPESCRIPT', icon: 'typescript', description: 'My react is lame somewhere'},
      {id: v1(), title: 'GIT', icon: 'git', description: 'My react is lame somewhere'},
      {id: v1(), title: 'REACT', icon: 'react', description: 'My react is lame somewhere'},
      {id: v1(), title: 'REDUX', icon: 'redux', description: 'My react is lame somewhere'},
      {id: v1(), title: 'STORYBOOK', icon: 'storybook', description: 'My react is lame somewhere'},
      {id: v1(), title: 'TDD-JEST', icon: 'jest', description: 'My react is lame somewhere'},
      {id: v1(), title: 'REST API', icon: 'api', description: 'My react is lame somewhere'},
    ]
  )

  const timerId = useRef<Timout | null>(null)
  // const timerId = useRef<any>(null)
  const on = useCallback((id: string) => {
    if (timerId.current) clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      setSkills(skills.map(e => e.id === id ? {...e, icon: ''} : e));
    }, 790);
  }, [])

  const off = useCallback(() => {
    if (timerId.current) clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      setSkills(skills);
    }, 200);
  }, [])


  return (
    <section id={props.id} className={s.mySkills}>
      <div className={s.container}>
        <TitleH2 title={'My skills'}/>
        <div className={s.containerSkills}>
          {skills.map(skill => {
            return (
              <Skill skill={skill} switchOn={on} switchOff={off} key={skill.id}/>
            );
          })}
        </div>
      </div>
    </section>
  );
});



