import React from 'react';
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

export const MySkills = () => {

    const mySkillsProduct = [
        {id: v1(), title: 'HTML', icon: htmlIcon, description: 'Google translator rules'},
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

