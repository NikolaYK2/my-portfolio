import React, {memo} from 'react';
import s from './MySkills.module.scss';
import {TitleH2} from "common/components/titleH2/titleH2";
import {IconSvgType} from "common/components/iconSvg/IconSvg";
import {Skill} from "features/2-main/ui/mySkills/skill/Skill";
import {Waypoint} from "react-waypoint";
import {domAnimation, LazyMotion, m} from 'framer-motion';
import {useWaypoint} from "common/hooks/useWaypoint";

type MySkillsType = {
  id: string
}

type SkillsType = {
  title: string;
  icon: IconSvgType;
}
const skills: SkillsType[] = [
  {title: 'HTML', icon: 'html5'},
  {title: 'CSS', icon: 'css3'},
  {title: 'JAVASCRIPT', icon: 'js'},
  {title: 'TYPESCRIPT', icon: 'typescript'},
  {title: 'GIT', icon: 'git'},
  {title: 'REACT', icon: 'react'},
  {title: 'REDUX', icon: 'redux',},
  {title: 'STORYBOOK', icon: 'storybook'},
  {title: 'TDD-JEST', icon: 'jest'},
  {title: 'REST-API', icon: 'api'},
]

export const MySkills = memo((props: MySkillsType) => {

  const {isVisible, waypointHandlerEnter} = useWaypoint()

  const container = {
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id={props.id} className={s.mySkills}>
      <div className={s.container}>
        <TitleH2 title={'My skills'}/>
        <LazyMotion features={domAnimation}>
          <m.div
            className={`${s.containerSkills} paddingBlock`}
            variants={container}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
          >
            <Waypoint onEnter={waypointHandlerEnter}/>
            {skills.map((skill) => <Skill skill={skill} key={skill.title}/>)}
          </m.div>
        </LazyMotion>
      </div>
    </section>
  );
});





