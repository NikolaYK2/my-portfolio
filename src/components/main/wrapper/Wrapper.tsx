import React from 'react';
import s from './Wrapper.module.scss';

export const Wrapper = () => {
    return (
        <div id='wrap' className={s.wrapper}>
            <div className={s.wrapperContainer}>
                <div className={s.wrapperName}>
                    <h1><span>N</span>ikolaj Ivanovich Kevlich<span>.</span></h1>
                    <p>I am a front-end developer</p>
                </div>
                {/*<div className={s.wrapperImg}>*/}
                {/*    <img src="https://w0.peakpx.com/wallpaper/450/104/HD-wallpaper-tiger-black-noir-tigre.jpg" alt=""/>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

