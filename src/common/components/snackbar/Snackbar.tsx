import React, {useEffect} from 'react';
import s from './Snackbar.module.scss'
import {IconSvg} from "common/components/iconSvg/IconSvg";

type Props = {
  message: string;
  setMessage: (message: string) => void;
}
export const Snackbar = ({message, setMessage}: Props) => {

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
    <>
      {message &&
          <div className={s.snackbar}>
              <div className={s.icon}>
                  <IconSvg name={"message"}/>
              </div>
              <div className={s.message}>
                {message}
              </div>
          </div>
      }
    </>
  );
};
