import React from 'react';
import s from './Work.module.scss';
import i from '../wrapper/I_maloy.jpg'
import {Button} from "../../button/Button";

export const Work = () => {

    return (
        <section className={s.work} style={{backgroundImage: `url(${i})`}}>
            <div className={s.container}>
                <h2>Do you like my work?</h2>
                <p>Let’s work together!</p>
                <Button title={'Get in touch'}/>
            </div>
        </section>
    );
};

