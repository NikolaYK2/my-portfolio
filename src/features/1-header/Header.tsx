import React, {memo, useCallback, useEffect, useState} from 'react';
import s from './Header.module.scss';
import {Link} from "react-scroll";
import {Logo} from "common/components/logo/Logo";
import {BackToTop} from "common/components/backToTop/BackToTop";

type TaskNavType = {
  id: string;
  link: string;
  title: string;
  color: string;
}
const taskNav: TaskNavType[] = [
  {id: '1', link: 'wrap', title: 'Home', color: '#9da1a5'},
  {id: '2', link: 'skills', title: 'Skills', color: '#9da1a5'},
  {id: '3', link: 'crafts', title: 'Works', color: '#9da1a5'},
  {id: '4', link: 'contact', title: 'Contacts', color: '#9da1a5'},
]
export const Header = memo(() => {
  const [modNav, setStyleNav] = useState(s.headerNav);
  const [modBurger, setStyleBurger] = useState('');
  const [switchNav, setSwitchNav] = useState(true);

  const activeLi = useCallback(() => {
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
  const [background, setBackground] = useState(s.bcOff);//bc для header

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (direction !== scrollDirection && (scrollY - lastScrollY > 3 || scrollY - lastScrollY < -3)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
      if (scrollY === 0) {
        setBackground(s.bcOff);//делаем прозрачным
      } else {
        setBackground(s.bcOn);
      }

    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);


  return (
    <section className={`${s.header} ${scrollDirection === "down" ? s.down : s.up} ${background}`}>
      <div className={s.headerContainer}>
        <Link to="wrap"
              smooth={true}
              spy={true}
              offset={-50}
        >
          <Logo title={'Nik.'}/>
        </Link>
        <div className={`${s.menuBurger} ${modBurger}`} onClick={burgerClick}>
          <span/>
        </div>
        <nav className={`${s.headerNav} ${modNav}`}>
          <ul>
            {taskNav.map(e => <Li task={e} activeLi={activeLi} key={e.id}/>)}
          </ul>
        </nav>
      </div>
      <BackToTop/>
    </section>
  );
});


//=================================================================
type LiType = {
  task: { id: string, link: string, title: string, color: string },
  activeLi: (id: string) => void;
}
const Li = memo(({task, activeLi}: LiType) => {

  return (
    <li>
      <Link to={task.link}
            smooth={true}
            spy={true}
            activeClass={s.active}
            offset={-50}
            onClick={() => activeLi(task.id)}
      >
        {task.title}
      </Link>
    </li>
  );
});


