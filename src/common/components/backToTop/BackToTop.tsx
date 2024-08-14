import React, {useEffect, useState} from 'react';
import {Button} from "common/components/button/Button";
import {IconSvg} from "common/components/iconSvg/IconSvg";
import {Link} from "react-scroll";
import s from './BackToTop.module.scss'
import {LazyMotion, domAnimation} from 'framer-motion'
import {MyContactsAnimation} from "features/2-main/ui/myСontacts/MyContactsAnimation";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Показываем кнопку, когда прокручиваем вниз 300px от верха
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Это обеспечивает плавную прокрутку
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <Link to={'wrap'}
            smooth={true}
            spy={true}
            offset={-50}
            className={s.containerBackToTop}
      >
        <Button onClick={scrollToTop} visible={isVisible} variantsAnimation={MyContactsAnimation.button}>
          <IconSvg name={"backToTop"}/>
        </Button>
      </Link>
    </LazyMotion>
  );
};