import React, {LegacyRef, memo} from 'react';
import s from './Main.module.scss';
import {Wrapper} from "./wrapper/Wrapper";
import {MySkills} from "./mySkills/MySkills";
import {MyCrafts} from "./myСrafts/MyCrafts";
import {Work} from "./work/Work";
import {MyContacts} from "./myСontacts/MyContacts";

type MainType = {
    refMain: LegacyRef<HTMLDivElement> | undefined,
}
export const Main = memo((props: MainType) => {
    return (
        <div className={s.main} ref={props.refMain}>
            <Wrapper id={'wrap'}/>
            <MySkills id={'skills'}/>
            <MyCrafts id={'crafts'}/>
            <Work/>
            <MyContacts id={'contact'}/>
        </div>
    );
});

