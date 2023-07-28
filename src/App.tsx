import React, {useEffect, useState} from 'react';
import {Header} from "components/header/Header";
import {Main} from "components/main/Main";
import {Footer} from "components/footer/Footer";
import s from './App.module.scss';


function App() {
    const [isRead, setIsReady] = useState(false);//Загрузка шрифтов

//Загрузка шрифтов -----------------------------------
    useEffect(() => {
        Promise.all([
            document.fonts.load("1rem Jost"),
            document.fonts.load("bold 12px Jost"),
        ]).then(() => setIsReady(true))
    }, [])

    //скрол ползунка ------------------------------------------------

    return (
        <>
            {isRead &&
                <div className={s.App}>
                    <Header/>
                    <Main/>
                    <Footer/>
                </div>
            }
        </>
    );
}

export default App;