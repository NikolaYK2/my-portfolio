import React, {useState} from 'react';
import s from './MyCrafts.module.scss';
import {v1} from "uuid";
import socialImg from 'assets/image/myCraft/social.jpg';
import appImg from 'assets/image/myCraft/app.jpg';
import {TitleH2} from "common/components/titleH2/titleH2";

type MyCraftsType={
    id:string
}

export const MyCrafts = (props:MyCraftsType) => {

    const crafts = [
        {
            id: v1(),
            title: 'Social network',
            background: socialImg,
            description: 'Have a good mood checking',
            link: 'https://nikolayk2.github.io/samurai-way-k2/',
        },
        {
            id: v1(),
            title: 'Application',
            background: appImg,
            description: 'And again to you sensei! May the force be with you',
            link: 'https://nikolayk2.github.io/it-incubator-todolist-ts-01/',
        },
    ]

    return (
        <section id={props.id} className={s.craft}>
            <div className={s.containerItem}>
                <TitleH2 title={'My crafts'}/>
                <div className={s.containerCrafts}>
                    {crafts.map(craft => {
                        return (
                            <Craft key={craft.id} crafts={craft}/>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

//===================================================================================
type Type = {
    id: string,
    title: string,
    background: string,
    description: string,
    link: string,
}
type CraftType = {
    crafts: Type,
}
export const Craft = (props: CraftType) => {
    const {crafts} = props

    let [style, setStyle] = useState<string>('')

    const on = () => {
        setStyle(s.active);
    }
    const off = () => {
        setStyle(s.off);
    }

    return (
        <div className={`${s.containerBlock} ${style}`} onMouseOver={on} onMouseOut={off}>
            <div className={s.containerBackground} style={{backgroundImage: `url(${crafts.background})`}}>
                <a href={crafts.link}>
                    <button>watch</button>
                </a>
            </div>
            <div className={s.containerText}>
                <p className='appGeneralTitle'>{crafts.title}</p>
                <p className='appGeneralDescription'>{crafts.description}</p>
            </div>
        </div>
    );
};

