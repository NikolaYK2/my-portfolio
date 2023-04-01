import React, {memo, useCallback, useState} from 'react';
import s from './MySkills.module.scss';
import {v1} from "uuid";
import {TitleH2} from "../../titleH2/titleH2";
import {IconSvg} from "../../iconSvg/IconSvg";


let stop: any = null;

export const MySkills = () => {
    const [skills, setSkills] = useState(
        [
            {id: v1(), title: 'HTML', icon: 'html5', description: 'Google translator rules' },
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
    const [style, setStyle] = useState('');

   const on=(id:string)=>{
       switchOn(id);
       setStyle(s.mod);
   }
   const off=()=>{
       switchOff();
       setStyle(s.modReverse);
   }
    console.log('render')
    return (
        <div className={s.containerItem} onMouseOver={()=>on(skill.id)} onMouseOut={off}>
            {skill.icon
                ? <div className={`${s.containerImg} ${s.mod}`}>
                    <IconSvg id={skill.icon}/>
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

