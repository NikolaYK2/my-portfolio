import React from 'react';
import s from './MyContacts.module.scss';
import {TitleH2} from "common/components/titleH2/titleH2";
import {Button} from "common/components/button/Button";
import useScrollPosition from "common/utils/UseScrollPosition";
type MyContactsType={
    id:string
}

export const MyContacts = (props:MyContactsType) => {

    return (
        <section id={props.id} className={s.contact}>
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

