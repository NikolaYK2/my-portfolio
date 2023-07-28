import React, {useLayoutEffect, useRef, useState} from 'react';
import s from './Main.module.scss';
import {Wrapper} from "./wrapper/Wrapper";
import {MySkills} from "./mySkills/MySkills";
import {MyCrafts} from "./myСrafts/MyCrafts";
import {Work} from "./work/Work";
import {MyContacts} from "./myСontacts/MyContacts";

// export const PATH = {
//     home: '/home',
//     skills: '/skills',
//     works: '/works',
//     contacts: '/contacts',
// }
export const Main = () => {
    const [sk, setSk] = useState(0)
    const [refs, setRefs] = useState(0)
    const [doc, setDoc] = useState(0)
    const ref = useRef<HTMLDivElement>(null)
    const hadl = () => {
        if (ref.current) setRefs(Math.ceil(ref.current.scrollHeight))
        setSk(Math.ceil(window.scrollY))
        setDoc(Math.ceil(document.documentElement.clientHeight))

    }

    useLayoutEffect(() => {
        requestAnimationFrame(()=>{
            document.addEventListener('scroll', hadl)
        })
        return () => {
            document.removeEventListener('scroll', hadl)
        }
    }, []);


    const style = {height: `${sk > refs - doc ? 100 : sk / (refs / 100) + 10}%`}
    return (
        <div className={s.main} ref={ref}>
            <div className={s.slider} style={style}></div>
            <Wrapper id={'wrap'}/>
            <MySkills id={'skills'}/>
            <MyCrafts id={'crafts'}/>
            <Work/>
            <MyContacts id={'contact'}/>
        </div>
    );
};

