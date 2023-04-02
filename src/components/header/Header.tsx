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
    const [modNav, setStyleNav] = useState(s.headerNav);
    const [modBurger, setStyleBurger] = useState('');
    const [switchNav, setSwitchNav] = useState(true);

    const activeLi = useCallback((id: string) => {
        setTaskNav(taskNav.map(e => e.id === id ? {...e, color: '#1DCB0A'} : e));
        setSwitchNav(true);
    }, []);

    useEffect(() => {
        if (switchNav) {
            setStyleNav(s.headerNav);
            setStyleBurger(s.menuBurger);
            document.body.style.overflow = 'unset'
        } else {
            setStyleNav(s.activeMenu);
            setStyleBurger(s.activeBurger);
            document.body.style.overflow = 'hidden'
        }

    }, [switchNav])

    const burgerClick = () => {
        setSwitchNav(!switchNav);
    }

    //SCROLL-------------------------------------------------------------------
    const [scrollDirection, setScrollDirection] = useState<any>(null);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollDirection = () => {
            const scrollY = window.scrollY;
            const direction = scrollY > lastScrollY ? 'down' : 'up';
            if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
                setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        window.addEventListener("scroll", updateScrollDirection); // add event listener
        return () => {
            window.removeEventListener("scroll", updateScrollDirection); // clean up
        }
    }, [scrollDirection]);


    return (
        <section className={`${s.header} ${scrollDirection === "down" ? s.down : s.up}`}>
            <div className={s.headerContainer}>
                <Logo title={'Nik.'}/>
                <div className={`${s.menuBurger} ${modBurger}`} onClick={burgerClick}>
                    <span></span>
                </div>
                <nav className={`${s.headerNav} ${modNav}`}>
                    <ul>
                        {taskNav.map(e => {
                            return (
                                <Li task={e} activeLi={activeLi} key={e.id}/>
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
    activeLi: (id: string) => void;
}
const Li = memo((props: LiType) => {
    const {task, activeLi} = props;
    console.log('render Nav')
    return (
        <li>
            <a href={task.link} style={{color: task.color}}
               onClick={() => activeLi(task.id)}>{task.title}</a>
        </li>
    );
});


