import {Button} from "common/components/button/Button";
import {IconSvg} from "common/components/iconSvg/IconSvg";
import React from "react";
import s from './DownloadCV.module.scss'

export const DownloadCV = () => {
  return (
    <a className={s.containerDownloadCV} href={`${process.env.PUBLIC_URL}/cv.pdf`} download="Nikolaj_CV.pdf">
      <Button>
        Download CV
        <IconSvg name={"download"}/>
      </Button>
    </a>
  );
};
