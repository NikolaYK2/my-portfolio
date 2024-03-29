import React, {useEffect} from 'react';
import s from './Work.module.scss';
import i from 'assets/image/wrapper/I_maloy.jpg'
import {Button} from "common/components/button/Button";
import {animationOnScroll} from "common/utils/animateOnScroll";
import useScrollPosition from "common/utils/UseScrollPosition";

export const Work = () => {

    const pos = useScrollPosition(0.5)

    useEffect(() => {
        animationOnScroll('#h2', s.activeH2)
        animationOnScroll('#p', s.activeP)
    }, []);
    return (
        <section className={s.work} style={{backgroundImage: `url(${i})`}}>
            <div className={s.container}>
                <h2 id='h2'>Do you like my work?</h2>
                <p id='p'>Let’s work together!</p>
                <Button title={'Get in touch'}/>
            </div>
        </section>
    );
};

