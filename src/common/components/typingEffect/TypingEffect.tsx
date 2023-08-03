import React, {useEffect, useState} from 'react';


export const TypingEffect = (props: { text: string }) => {
    //typing effect ----------------------------------------------------
    const [typing, setTyping] = useState('');
    const [index, setIndex] = useState(0);
    const [forward, setForward] = useState(true); // new state variable

    useEffect(() => {
        setTimeout(() => {
            if (forward) { // if typing forward
                if (index < props.text.length) {
                    setTyping(typing + props.text[index])
                    setIndex(index + 1)
                } else if (index === props.text.length) {
                    setTimeout(() => {
                        setForward(false) // change direction to backward
                    }, 10000)
                }
            } else { // if typing backward
                if (index > 0) {
                    setTyping(typing.slice(0, -1)) // remove the last character
                    setIndex(index - 1)
                } else if (index === 0) {
                    setTimeout(() => {
                        setForward(true) // change direction to forward
                    }, 5000)
                }
            }
        }, 200)

    }, [index, forward]); // add forward as a dependency
    return (
        <>
           {typing}
            {/*<h1 className={s.typingEffect}>{typing}</h1>*/}
        </>
    );
};

