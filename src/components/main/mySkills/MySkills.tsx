import React from 'react';
import s from './MySkills.module.scss';
import {v1} from "uuid";
import reactIcon from './icon-react.png'
import htmlCSSIcon from './htmlCSS.png'
import JS from './JS.png'
import {TitleH2} from "../../titleH2/titleH2";

export const MySkills = () => {

    const mySkillsProduct = [
        {id: v1(), title: 'Html/CSS', icon: htmlCSSIcon, description: 'Google translator rules'},
        {id: v1(), title: 'JS', icon: JS, description: 'I also translated this in google translator.'},
        {id: v1(), title: 'React', icon: reactIcon, description: 'My react is lame somewhere'},
    ]
    return (
        <div id={'skills'} className={s.mySkills}>
            <section className={s.container}>
                <TitleH2 title={'My skills'}/>
                <div className={s.containerSkills}>
                    {mySkillsProduct.map(skill => {
                        return (
                            <div key={skill.id} className={s.containerItem}>
                                <div className={s.containerImg}>
                                    <img src={skill.icon} alt=""/>
                                </div>
                                <p className='appGeneralTitle'>{skill.title}</p>
                                <div className={s.containerText}>
                                    <p>{skill.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

