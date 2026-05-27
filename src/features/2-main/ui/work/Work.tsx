import React, {useEffect} from 'react';
import s from './Work.module.scss';
import i from 'assets/image/wrapper/portfolio.webp'
import {animationOnScroll} from "common/utils/animateOnScroll";
import {ImageBackground} from "common/components/imageBackground/ImageBackground";

export const Work = () => {

  useEffect(() => {
    animationOnScroll('#h2', s.activeH2)
    animationOnScroll('#p', s.activeP)
  }, []);

  return (
    <section className={s.work}>
      <ImageBackground src={i}/>
      <div className={s.container}>
        <h2 id='h2'>Do you like my work?</h2>
        <p id='p'>Let’s work together!</p>
      </div>
    </section>
  );
};

