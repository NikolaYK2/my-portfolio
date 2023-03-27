import React, {memo, useCallback, useState} from 'react';
import s from './MySkills.module.scss';
import {v1} from "uuid";
import reactIcon from './react.svg';
import htmlIcon from './html5.svg'
import cssIcon from './css3.svg'
import gitIcon from './git.svg'
import jestIcon from './jest.svg'
import apiIcon from './api.svg'
import jsIcon from './js.svg'
import reduxIcon from './redux.svg'
import stBkIcon from './storybook.svg'
import tsIcon from './typescript.svg'
import {TitleH2} from "../../titleH2/titleH2";

let stop: any = null;

export const MySkills = () => {
    const [skills, setSkills] = useState(
        [
            {
                id: v1(),
                title: 'HTML',
                icon: htmlIcon,
                description: 'Google translator rules Google translator rulesGoogle translator rulesGoogle translator rulesGoogle translator rulesGoogle translator rulesGoogle translator rulesGoogle translator rulesGoogle translator rulesGoogle translator rulesGoogle translator rules'
            },
            {id: v1(), title: 'CSS', icon: cssIcon, description: 'My react is lame somewhere'},
            {id: v1(), title: 'JAVASCRIPT', icon: jsIcon, description: 'I also translated this in google translator.'},
            {id: v1(), title: 'TYPESCRIPT', icon: tsIcon, description: 'My react is lame somewhere'},
            {id: v1(), title: 'GIT', icon: gitIcon, description: 'My react is lame somewhere'},
            {id: v1(), title: 'REACT', icon: reactIcon, description: 'My react is lame somewhere'},
            {id: v1(), title: 'REDUX', icon: reduxIcon, description: 'My react is lame somewhere'},
            {id: v1(), title: 'STORYBOOK', icon: stBkIcon, description: 'My react is lame somewhere'},
            {id: v1(), title: 'TDD-JEST', icon: jestIcon, description: 'My react is lame somewhere'},
            {id: v1(), title: 'REST API', icon: apiIcon, description: 'My react is lame somewhere'},
        ]
    )

    const on = useCallback((id: string) => {
        clearTimeout(stop);
        stop = setTimeout(() => {
            setSkills(skills.map(e => e.id === id ? {...e, icon: ''} : e));
        }, 800);
    }, [])

    const off = useCallback(() => {
        clearTimeout(stop);
        stop = setTimeout(() => {
            setSkills(skills);
        }, 800);
    }, [])

    return (
        <section id={'skills'} className={s.mySkills}>
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
};

//==========================================================================================
type Type = {
    id: string,
    title: string,
    icon: string,
    description: string
}
type SkillType = {
    skill: Type,
    switchOn: (idSkill: string) => void,
    switchOff: () => void,
}
const Skill = memo((props: SkillType) => {
    const {skill, switchOn, switchOff} = props;
    const [style, setStyle] = useState(s.mod);

   const on=(id:string)=>{
       switchOn(id)
       setStyle(s.mod)
   }
   const off=()=>{
       switchOff()
       setStyle(s.modReverse)
   }
    console.log('render')
    return (
        <div className={s.containerItem} onMouseOver={()=>on(skill.id)} onMouseOut={off}>
            {skill.icon
                ? <div className={`${s.containerImg} ${s.mod}`}>
                    <img src={skill.icon} alt=""/>
                    <p>{skill.title}</p>
                </div>
                : <>
                    <div className={`${s.containerText} ${style}`}>
                        <p>{skill.title}</p>
                        <p>{skill.description}</p>
                    </div>
                </>
            }
        </div>
    );
});

