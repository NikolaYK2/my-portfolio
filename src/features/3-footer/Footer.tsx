import React, {useEffect} from 'react';
import s from './Footer.module.scss';
import {Logo} from "common/components/logo/Logo";
import {IconSvg, IconSvgType} from "common/components/iconSvg/IconSvg";
import {animationOnScroll} from "common/utils/animateOnScroll";

type SocialType = {
  id: IconSvgType;
  link: string;
}
export const Footer = () => {

  const social: SocialType[] = [
    {id: 'github', link: 'https://github.com/NikolaYK2'},
    {id: 'linkedin', link: 'https://www.linkedin.com/in/nikolaj-kevlich-6a4423263/'},
    {id: 'telegram', link: 'https://t.me/Nik_Kev'},
  ]

  useEffect(() => {
    animationOnScroll(`#a`, s.aActive)
  }, [])

  return (
    <section className={s.footer}>
      <div className={s.ss}>
        <div className={s.containerFooter}>
          <Logo title={'Nik.'}/>
          <div className={s.containerSocial}>
            {social.map((social, index) => {
              return (
                <div key={index} className={s.containerBlock}>
                  <a id='a' href={social.link}>
                    <IconSvg name={social.id}/>
                  </a>
                </div>
              );
            })}
          </div>
          <p>© All Rights Reserved.</p>
        </div>
      </div>

    </section>
  );
};

