import React from 'react';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Footer} from "./components/footer/Footer";
import s from './App.module.scss';

function App() {
    return (
        <div className={s.App}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
