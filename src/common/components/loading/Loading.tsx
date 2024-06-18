import React from 'react';
import s from "./Loading.module.scss";
import {IconSvg} from "common/components/iconSvg/IconSvg";

type Props = {
  name: 'loading' | 'message'
}
export const Loading = ({name}: Props) => {
  return (
    <div className={s.containerLoading}>
      <div className={`${s[name]}`}>
        <IconSvg name={name}/>
      </div>
    </div>
  );
};

