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
  {title: 'REACT', icon: 'react'},
  {title: 'NEXT.JS', icon: 'next'},
  {title: 'REACT NATIVE', icon: 'reactNative'},
  {title: 'EXPO', icon: 'expo'},
  {title: 'TELEGRAM MINI APPS', icon: 'telegramMiniApp'},
  {title: 'TYPESCRIPT / JS', icon: 'typescript'},
  {title: 'GRAPHQL', icon: 'graphql'},
  {title: 'REST API', icon: 'api'},
  {title: 'TANSTACK QUERY', icon: 'tanstackQuery'},
  {title: 'ZUSTAND', icon: 'zustand'},
  {title: 'REDUX TOOLKIT', icon: 'redux'},
  {title: 'RHF / ZOD', icon: 'zod'},
  {title: 'TAILWIND / SCSS', icon: 'tailwind'},
  {title: 'RADIX / SHADCN', icon: 'radix'},
  {title: 'STORYBOOK / JEST', icon: 'storybook'},
  {title: 'GIT / CI-CD', icon: 'git'},
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





