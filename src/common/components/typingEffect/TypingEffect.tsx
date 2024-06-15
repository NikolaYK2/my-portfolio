import React, { useEffect, useState } from 'react';

type Props = {
  text: string;
};
export const TypingEffect = ({ text }: Props) => {
  const [typing, setTyping] = useState(''); // Состояние для текста, который отображается
  const [index, setIndex] = useState(0); // Состояние для текущего индекса символа
  const [forward, setForward] = useState(true); // Состояние для направления набора текста

  useEffect(() => {
    // Функция, которая управляет набором текста
    const handleTyping = () => {
      if (forward) { // Если направление вперед
        if (index < text.length) {
          setTyping(prev => prev + text[index]); // Добавляем следующий символ к 'typing'
          setIndex(prev => prev + 1); // Увеличиваем индекс
        } else if (index === text.length) {
          setTimeout(() => {
            setForward(false); // Меняем направление через 10 секунд
          }, 10000);
        }
      } else { // Если направление назад
        if (index > 0) {
          setTyping(prev => prev.slice(0, -1)); // Удаляем последний символ из 'typing'
          setIndex(prev => prev - 1); // Уменьшаем индекс
        } else if (index === 0) {
          setTimeout(() => {
            setForward(true); // Меняем направление через 5 секунд
          }, 5000);
        }
      }
    };

    // Устанавливаем таймер для вызова handleTyping каждые 200 мс
    const typingTimeout = setTimeout(handleTyping, 200);

    // Очистка таймера при размонтировании компонента или изменении зависимости
    return () => clearTimeout(typingTimeout);
  }, [index, forward, text]);

  return (
    <>
      {typing}
    </>
  );
};
