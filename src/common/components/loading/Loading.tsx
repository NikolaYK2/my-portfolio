import React from 'react';
import s from "./Loading.module.scss";
import {IconSvg} from "common/components/iconSvg/IconSvg";

export const Loading = () => {
    return (
        <div className={s.containerLoading}>
            <div className={s.loading}>
                <IconSvg id={'loading'}/>
            </div>
        </div>
    );
};

