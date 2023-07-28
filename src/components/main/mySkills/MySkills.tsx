import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import s from './MySkills.module.scss';
import {v1} from "uuid";
import {TitleH2} from "common/components/titleH2/titleH2";
import {IconSvg} from "../../iconSvg/IconSvg";
import {animationOnScroll} from "common/utils/animateOnScroll";

// let stop: any = null;
type Timout = ReturnType<typeof setTimeout>
type MySkillsType={
    id:string
}

export const MySkills = memo((props:MySkillsType) => {
    const [skills, setSkills] = useState(
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
        }, 800);
    }, [])

    const off = useCallback(() => {
        if (timerId.current) clearTimeout(timerId.current);
        timerId.current = setTimeout(() => {
            setSkills(skills);
        }, 200);
    }, [])
    // const on = useCallback((id: string) => {
    //     clearTimeout(stop);
    //     stop = setTimeout(() => {
    //         setSkills(skills.map(e => e.id === id ? {...e, icon: ''} : e));
    //     }, 800);
    // }, [])
    //
    // const off = useCallback(() => {
    //     clearTimeout(stop);
    //     stop = setTimeout(() => {
    //         setSkills(skills);
    //     }, 200);
    // }, [])


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

    const on = (id: string) => {
        switchOn(id);
        setStyle(s.mod);
    }
    const off = () => {
        switchOff();
        setStyle(s.modReverse);
    }
    console.log('render')

    useEffect(() => {
        animationOnScroll(`.${s.containerItem}`, s.shellAnim)
    }, [])

    return (
        <div className={s.shellContainerItem} onMouseOver={() => on(skill.id)} onMouseOut={off}>
            <div className={s.containerItem}>
                {skill.icon
                    ? <div className={`${s.containerImg} ${s.mod}`}>
                        <IconSvg id={skill.icon}/>
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

