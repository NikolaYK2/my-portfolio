import React, {LegacyRef, memo} from 'react';
import s from './Main.module.scss';
import {Wrapper} from "./wrapper/Wrapper";
import {MySkills} from "./mySkills/MySkills";
import {Work} from "./work/Work";
import {MyContacts} from "./myСontacts/MyContacts";
import {MyCrafts} from "features/2-main/ui/myCrafts/MyCrafts";

type MainType = {
  refMain: LegacyRef<HTMLDivElement> | undefined,
}
export const Main = memo(({refMain}: MainType) => {

  return (
    <div className={s.main} ref={refMain}>
      <Wrapper id={'wrap'}/>
      <MySkills id={'skills'}/>
      <MyCrafts id={'crafts'}/>
      <Work/>
      <MyContacts id={'contact'}/>
    </div>
  );
});

