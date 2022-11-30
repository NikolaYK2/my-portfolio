import React from 'react';
import s from './Work.module.css';

export const Work = () => {
    return (
        <section className={s.work}>
            <div className={s.container}>
                <h3 className='appGeneralTitle'>Considering remote work options</h3>
                <button>hire me</button>
            </div>
        </section>
    );
};

