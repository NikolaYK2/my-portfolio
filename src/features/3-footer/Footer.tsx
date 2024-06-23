import React from 'react';
import s from './Footer.module.scss';
import {Logo} from "common/components/logo/Logo";
import {Messengers} from "common/components/messegers/Messengers";


export const Footer = () => {


  return (
    <section className={s.footer}>
      <div className={s.ss}>
        <div className={s.containerFooter}>
          <Logo title={'Nik.'}/>
          <Messengers variant={"square"}/>
          <p>© All Rights Reserved.</p>
        </div>
      </div>

    </section>
  );
};

