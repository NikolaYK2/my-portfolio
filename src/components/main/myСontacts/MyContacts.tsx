import React from 'react';
import s from './MyContacts.module.css';

export const MyContacts = () => {
    return (
        <section id={'contact'} className={s.contact}>
            <div className={s.container}>
                <h3 className='appGeneralTitle'>Contacts</h3>
                <form action="#" encType='#' method='#' className={s.form}>
                    <input type="text" placeholder='Full name'/>
                    <input type="tel" placeholder='Phone number'/>
                    <input type="email" placeholder='E-mail'/>
                    <textarea name="" placeholder='You message'></textarea>
                    <button>Send</button>
                </form>
            </div>
        </section>
    );
};

