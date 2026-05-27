import React from 'react';
import s from './ImageBackground.module.scss';

type ImageBackgroundProps = {
  src: string
  alt?: string
  className?: string
  imageClassName?: string
}

const getClassName = (...classNames: Array<string | undefined>) => classNames.filter(Boolean).join(' ');

export const ImageBackground = ({src, alt = '', className, imageClassName}: ImageBackgroundProps) => {
  return (
    <div className={getClassName(s.imageBackground, className)} aria-hidden={alt ? undefined : true}>
      <img className={getClassName(s.image, imageClassName)} src={src} alt={alt}/>
    </div>
  );
};
