import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import s from './Wrapper.module.scss';
import fonPhoto from 'assets/image/wrapper/I_maloy.jpg'

export const Wrapper = () => {
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
        const parallaxSpeed = 0.40;
        paralaxWrapper.current!.style.transform = `translateY(${scrollPosition * parallaxSpeed}px)`;
    }, [scrollPosition])

    return (
        <div id='wrap' className={s.wrapper} style={{backgroundImage: `url(${fonPhoto})`}}>
            <div  className={s.wrapperContainer}>
                <div id='wrapperName' className={s.wrapperName} ref={paralaxWrapper}>
                    <h1><span>N</span>ikolaj Kevlich<span>.</span></h1>
                    <p>I am a front-end developer</p>
                </div>
            </div>
        </div>
    );
};

