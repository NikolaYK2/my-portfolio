import React, {memo} from 'react';
import s from 'common/components/logo/Logo.module.scss';


export const Logo = memo((props:{title:string}) => {
    const {title} = props;
    return (
        <div className={s.logo}>
            <h3><span>{title[0]}</span>{title.slice(1,-1)}<span>{title[title.length-1]}</span></h3>
        </div>
    );
});
