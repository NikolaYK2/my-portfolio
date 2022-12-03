import React from 'react';
import s from './Main.module.css';
import {Wrapper} from "./wrapper/Wrapper";
import {MySkills} from "./mySkills/MySkills";
import {MyCrafts} from "./myСrafts/MyCrafts";
import {Work} from "./work/Work";
import {MyContacts} from "./myСontacts/MyContacts";

export const PATH = {
    home: '/home',
    skills: '/skills',
    works: '/works',
    contacts: '/contacts',
}
export const Main = () => {
    return (
        <div className={s.main}>
            <Wrapper/>
            <MySkills/>
            <MyCrafts/>
            <Work/>
            <MyContacts/>
        </div>
    );
};

