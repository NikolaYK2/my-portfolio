import React, {memo, useCallback, useEffect, useState} from 'react';
import s from './Header.module.scss';
import {Logo} from "../logo/Logo";


export const Header = memo(() => {
    const [taskNav, setTaskNav] = useState([
        {id: '1', link: '#wrap', title: 'Home', color: '#9da1a5'},
        {id: '2', link: '#skills', title: 'Skills', color: '#9da1a5'},
        {id: '3', link: '#crafts', title: 'Works', color: '#9da1a5'},
        {id: '4', link: '#contact', title: 'Contacts', color: '#9da1a5'},
    ])
    const [style, setStyle] = useState(s.headerNav);
    const [style1, setStyle1] = useState('');
    const [switchNav, setSwitchNav] = useState(true);

    const a = useCallback((id: string) => {
        setTaskNav(taskNav.map(e => e.id === id ? {...e, color: 'green'} : e));
        setSwitchNav(true);
    }, []);

    useEffect(() => {
        if (switchNav) {
            setStyle(s.headerNav);
            setStyle1(s.menuBurger);
            document.body.style.overflow = 'unset'
        } else {
            setStyle(s.active);
            setStyle1(s.as);
            document.body.style.overflow = 'hidden'
        }

    },[switchNav])
    const burgerClick = () => {
        setSwitchNav(!switchNav);
    }


    return (
        <section className={s.header}>
            <div className={s.headerContainer}>
                <Logo title={'Nik.'}/>
                <div className={`${s.menuBurger} ${style1}`} onClick={burgerClick}>
                    <span></span>
                </div>
                <nav className={`${s.headerNav} ${style}`}>
                    <ul>
                        {taskNav.map(e => {
                            return (
                                <Li task={e} a={a} key={e.id}/>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </section>
    );
});


//=================================================================
type LiType = {
    task: { id: string, link: string, title: string, color: string },
    a: (id: string) => void;
}
const Li = memo((props: LiType) => {
    const {task, a} = props;
    console.log('render Nav')
    return (
        <li>
            <a href={task.link} style={{color: task.color}}
               onClick={() => a(task.id)}>{task.title}</a>
        </li>
    );
});


