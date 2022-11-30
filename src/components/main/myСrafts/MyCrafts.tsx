import React from 'react';
import s from './MyCrafts.module.css';
import {v1} from "uuid";
import socialImg from './social.jpg';
import appImg from './app.jpeg';

export const MyCrafts = () => {

    const crafts = [
        {id: v1(), title: 'Social network', background:socialImg,  description:'Have a good mood checking'},
        {id: v1(), title: 'Application', background:appImg,  description:'And again to you sensei! May the force be with you'},
    ]
    return (
        <section className={s.craft}>
            <div className={s.containerItem}>
                <h3 className='appGeneralTitle'>My crafts</h3>
                <div className={s.containerCrafts}>
                    {crafts.map(c => {
                        return (
                            <div className={s.containerBlock} style={{backgroundImage: `url(${c.background})`}}>
                                <div>
                                    <span>{c.title}</span>
                                    <p className='appGeneralDescription'></p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

