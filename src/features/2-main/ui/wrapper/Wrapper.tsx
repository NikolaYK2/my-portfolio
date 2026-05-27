import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import s from './Wrapper.module.scss';
import fonPhoto from 'assets/image/wrapper/portfolio.webp'
// import fonPhoto from 'assets/image/wrapper/portfolio1.png'
import {TypingEffect} from "common/components/typingEffect/TypingEffect";
import {Messengers} from "common/components/messegers/Messengers";
import {DownloadCV} from "common/components/downloadCV/DownloadCV";
import {IconSvg} from "common/components/iconSvg/IconSvg";
import {useWaypoint} from "common/hooks/useWaypoint";
import {Waypoint} from "react-waypoint";
import {Link} from "react-scroll";
import {ImageBackground} from "common/components/imageBackground/ImageBackground";

type WrapperType = {
  id: string
}

const heroSignals = ['React', 'TypeScript', 'React Native', 'Telegram Apps'] as const;

export const Wrapper = (props: WrapperType) => {
  const {isVisible, waypointHandlerEnter} = useWaypoint()
  const paralaxWrapper = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const skrollHandle = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', skrollHandle)
    return () => window.removeEventListener('scroll', skrollHandle)
  }, [])

  useLayoutEffect(() => {
    const parallaxSpeed = 0.30;
    paralaxWrapper.current!.style.transform = `translateY(${scrollPosition * parallaxSpeed}px)`;
  }, [scrollPosition])

  return (
    <div id={props.id} className={s.wrapper}>
      <ImageBackground src={fonPhoto} className={s.backgroundImage}/>
      <Waypoint onEnter={waypointHandlerEnter}/>
      <div className={s.decor} aria-hidden="true">
        <span className={s.decorTileLarge}/>
        <span className={s.decorTileSmall}/>
        <span className={s.decorTileSide}/>
      </div>

      <div className={s.wrapperContainer}>
        <div id='wrapperName' className={s.wrapperName} ref={paralaxWrapper}>
          <p>I am</p>
          <h1><span>N</span>ik<TypingEffect text={'olaj Kevlich'}/><span>.</span></h1>
          <p className={s.roleLine}><span>React</span> / React Native developer</p>
          <p className={s.supportLine}>I build web, mobile and Telegram apps with production-ready UX.</p>
          <ul className={s.heroSignals} aria-label="Core stack">
            {heroSignals.map((signal) => <li key={signal}>{signal}</li>)}
          </ul>

          <div className={s.btnAndItem}>
            <DownloadCV/>
            <Messengers variant={"circle"}/>
          </div>
          <Link
            className={s.projectsCta}
            to="crafts"
            smooth={true}
            spy={true}
            offset={-50}
          >
            View projects
          </Link>
          <div className={`${s.backgroundHi} ${isVisible ? s.activeBackgroundHi : ''}`}>
            <IconSvg name={'hi'}/>
          </div>
        </div>
      </div>
    </div>
  );
};
