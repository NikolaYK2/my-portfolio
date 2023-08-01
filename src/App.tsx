import React, {useEffect, useRef, useState} from 'react';
import {Header} from "components/header/Header";
import {Main} from "components/main/Main";
import {Footer} from "components/footer/Footer";
import s from './App.module.scss';
import {Loading} from "common/components/loading/Loading";
import {debounce} from "common/utils/debounce";


function App() {
    //Загрузка шрифтов
    const [isRead, setIsReady] = useState(false);

    //скрол ползунка ------------------------------------------------
    const [height, setWeight] = useState(0);
    console.log(height)
    //эта ссылка будет использоваться для связи с основным разделом контента
    const contentRef = useRef<HTMLDivElement | null>(null);

    const scrollProgress = () => {
        // как далеко пользователь прокрутил вниз
        const scrollTop = document.documentElement.scrollTop;

        if (contentRef.current) {
            // расстояние от раздела контента до верха страницы
            const contentOffsetTop = contentRef.current?.offsetTop;

            // высота раздела контента
            const contentHeight = contentRef.current?.clientHeight;

            if (scrollTop - contentOffsetTop <= 0) {
                return setWeight(0);
            }

            setWeight(((scrollTop - contentOffsetTop) / (contentHeight - window.innerHeight)) * 100);
        }
    };
    let debounceSay = debounce(scrollProgress, 100)

//Загрузка шрифтов -----------------------------------
    useEffect(() => {
        Promise.all([
            document.fonts.load("1rem Jost"),
            document.fonts.load("bold 12px Jost"),
        ]).then(() => setIsReady(true))
    }, [])

    // skroll slaider -------------------------
    useEffect(() => {
        window.addEventListener("scroll", debounceSay);
        return () => {
            window.removeEventListener('scroll', debounceSay)
        }
    }, []);

    return (
        //!isRead = false значит показываем загрузку
        <>
            {!isRead ? <Loading/> :
                    <div className={s.App}>
                        <div className={s.slider} style={{height: `${height}%`}}></div>
                        <Header/>
                        <Main refMain={contentRef}/>
                        <Footer/>
                    </div>
            }
        </>
    );
}

export default App;