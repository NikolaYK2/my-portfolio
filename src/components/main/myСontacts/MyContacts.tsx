import React from 'react';
import s from './MyContacts.module.css';

export const MyContacts = () => {
    return (
        <section className={s.contact}>
            <div className={s.container}>
                <h3 className='appGeneralTitle'>Contacts</h3>
                    <form action="" className={s.form}>
                        <input type="text" placeholder='Full name'/>
                        <input type="text" placeholder='Phone number'/>
                        <input type="text" placeholder='E-mail'/>
                        <textarea name="" placeholder='You message'></textarea>
                    </form>
                <button>Send</button>

            </div>
        </section>
    );
};

