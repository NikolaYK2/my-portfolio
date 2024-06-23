import React, {useEffect} from 'react';
import {IconSvg, IconSvgType} from "common/components/iconSvg/IconSvg";
import s from "./Messengers.module.scss";
import {animationOnScroll} from "common/utils/animateOnScroll";

type SocialType = {
  id: IconSvgType;
  link: string;
}
const social: SocialType[] = [
  {id: 'github', link: 'https://github.com/NikolaYK2'},
  {id: 'linkedin', link: 'https://www.linkedin.com/in/nikolaj-kevlich-6a4423263/'},
  {id: 'telegram', link: 'https://t.me/Nik_Kev'},
]

type Props = {
  variant: 'circle' | 'square'
}
export const Messengers = ({variant}: Props) => {

  useEffect(() => {
    animationOnScroll(`#a`, s.aActive)
  }, [])

  return (
    <div className={s.containerSocial}>
      {social.map((social) => {
        return (
          <div key={social.id} className={`${s.containerBlock} ${s[variant]}`}>
            <a id='a' href={social.link}>
              <IconSvg name={social.id}/>
            </a>
          </div>
        )
      })}
    </div>
  )
}
