import React, {useEffect} from 'react';
import s from './MyContacts.module.scss';
import {TitleH2} from "common/components/titleH2/titleH2";
import {Button} from "common/components/button/Button";
import {animationOnScroll} from "common/utils/animateOnScroll";

export const MyContacts = () => {

    useEffect(() => {
        animationOnScroll(`.${s.chapters}`, s.chapterActive)
    }, [])

    return (
        <section id={'contact'} className={s.contact}>
            <div className={s.chapters}></div>
            <div className={s.container}>
                <TitleH2 title={'Contacts'}/>
                <form action="#" encType='#' method='#' className={s.form}>
                    <div className={s.formMod}>
                        <div className={s.formInput}>
                            <input type="text" placeholder='Full name'/>
                            <input type="tel" placeholder='Phone number'/>
                            <input type="email" placeholder='E-mail'/>
                        </div>
                        <div className={s.formTextarea}>
                            <textarea name="" placeholder='You message'></textarea>
                        </div>
                    </div>
                    <Button title={'send'}/>
                </form>
            </div>
        </section>
    );
};

