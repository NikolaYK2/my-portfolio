import {useEffect, useState} from "react";

export default function useScrollPosition(scrollFactor = 0) {
    const [position, setPosition] = useState(0);

//эта функция установит значение позиции при прокрутке страницы
    function onScroll() {
        setPosition(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
//удаляет прослушиватель событий, когда компонент размонтирован
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);


    return position * scrollFactor;
}
