import React from 'react';
import s from './MyCrafts.module.css';
import {v1} from "uuid";
import socialImg from './social.jpg';
import appImg from './app.jpeg';

export const MyCrafts = () => {

    const crafts = [
        {id: v1(),
            title: 'Social network',
            background:socialImg,
            description:'Have a good mood checking',
            link:'https://nikolayk2.github.io/samurai-way-k2/'
        },
        {id: v1(),
            title: 'Application',
            background:appImg,
            description:'And again to you sensei! May the force be with you',
            link:'https://nikolayk2.github.io/it-incubator-todolist-ts-01/'
        },
    ]
    return (
        <section id={'crafts'} className={s.craft}>
            <div className={s.containerItem}>
                <h3 className='appGeneralTitle'>My crafts</h3>
                <div className={s.containerCrafts}>
                    {crafts.map(c => {
                        return (
                            <div key={c.id} className={s.containerBlock}>
                                <div className={s.containerBackground} style={{backgroundImage: `url(${c.background})`}}>
                                    <a href={c.link}><button>watch</button></a>
                                </div>
                                <div className={s.containerText}>
                                    <p className='appGeneralTitle'>{c.title}</p>
                                    <p className='appGeneralDescription'>{c.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

