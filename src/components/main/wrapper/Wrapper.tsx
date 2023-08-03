import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import s from './Wrapper.module.scss';
import fonPhoto from 'assets/image/wrapper/I_maloy.jpg'
import {TypingEffect} from "common/components/typingEffect/TypingEffect";

type WrapperType = {
    id: string
}

export const Wrapper = (props: WrapperType) => {
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
        <div id={props.id} className={s.wrapper} style={{backgroundImage: `url(${fonPhoto})`}}>
            <div className={s.wrapperContainer}>
                <div id='wrapperName' className={s.wrapperName} ref={paralaxWrapper}>
                    <p>I am</p>
                    <h1><span>N</span>ik<TypingEffect text={'olaj Kevlich'}/><span>.</span></h1>
                    {/*<h1><span>N</span>ikolaj Kevlich<span>.</span></h1>*/}
                    <p><span>a fro</span>nt-end developer</p>
                </div>
            </div>
        </div>
    )
        ;
};

