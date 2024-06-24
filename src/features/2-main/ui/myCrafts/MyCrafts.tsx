import React from 'react';
import s from './MyCrafts.module.scss';
import {v1} from "uuid";
import socialImg from 'assets/image/myCraft/social.png';
import appImg from 'assets/image/myCraft/app.jpg';
import {TitleH2} from "common/components/titleH2/titleH2";
import {domAnimation, LazyMotion, m} from 'framer-motion';
import {Craft} from "./craft/Craft";
import {Waypoint} from "react-waypoint";
import {useWaypoint} from "common/hooks/useWaypoint";

const crafts = [
  {
    id: v1(),
    title: 'Social network',
    background: socialImg,
    description:
      'A dynamic social network application for connecting with friends. ' +
      'Features include messaging, profile customization, and activity feeds.',
    link: 'https://nikolayk2.github.io/samurai-way-k2/',
  },
  {
    id: v1(),
    title: 'Application',
    background: appImg,
    description:
      'A simple and intuitive application that helps you manage your tasks efficiently. ' +
      'Add, edit and delete tasks, set priorities and stay organised.',
    link: 'https://nikolayk2.github.io/it-incubator-todolist-ts-01/',
  },
]

type MyCraftsType = {
  id: string
}
export const MyCrafts = ({id}: MyCraftsType) => {
  const {visible, waypointHandlerEnter} = useWaypoint()

  //animation
  const container = {
    visible: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.4
      }
    }
  };

  return (
    <section id={id} className={s.craft}>
      <div className={s.containerItem}>
        <TitleH2 title={'My crafts'}/>
        <LazyMotion features={domAnimation}>
          <m.div className={`${s.containerCrafts} paddingBlock`}
                 variants={container}
                 initial="hidden"
                 animate={visible ? 'visible' : "hidden"}>
            <Waypoint onEnter={waypointHandlerEnter}/>
            {crafts.map(craft => <Craft key={craft.id} crafts={craft}/>)}
          </m.div>
        </LazyMotion>
      </div>
    </section>
  );
};


