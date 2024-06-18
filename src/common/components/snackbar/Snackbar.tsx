import React, {useEffect} from 'react';
import s from './Snackbar.module.scss'
import {IconSvg} from "common/components/iconSvg/IconSvg";

type Props = {
  message: string;
  setMessage: (message: string) => void;
  isError: boolean
}
export const Snackbar = ({message, setMessage, isError}: Props) => {

  useEffect(() => {
    let timeId: NodeJS.Timeout;

    if (message !== '') {
      timeId = setTimeout(() => {
        setMessage('')
      }, 5000)

    }

    return () => clearTimeout(timeId)

  }, [message, setMessage]);

  return (
    <div className={s.snackbar} onClick={() => {
      setMessage('')
    }}>
      <div className={s.icon}><IconSvg name={'close'}/></div>
      <div className={`${s.message} ${isError && s.error}`}>
        {message}
      </div>
    </div>
  );
};
