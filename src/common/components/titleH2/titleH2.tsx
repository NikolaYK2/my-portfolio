import React from 'react';
import s from './titleH2.module.scss'

const truncateString = (title: string): string => {
  const index = title.indexOf(' ');
  return title.slice(index);
}

type Props = {
  title: string,
}
export const TitleH2 = ({title}: Props) => {

  return (
    <div className={s.containerTitleH2}>
      <h2 className={s.title}>{title}</h2>
      <div className={s.backgroundTitleH2}>
        {truncateString(title)}
      </div>
    </div>
  );
};
