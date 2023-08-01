// Создаем функцию дебаунс
export function debounce(func: (event:Event) => void, delay: number) {
    // Создаем переменную для хранения идентификатора таймера
    let timerId: NodeJS.Timeout | null;
    // Возвращаем новую функцию, которая будет вызываться с аргументами func
    return function (event:Event) {
        // Отменяем предыдущий таймер, если он существует
        if (timerId) {
            clearTimeout(timerId);
        }
        // Создаем новый таймер, который будет вызывать func через delay миллисекунд
        timerId = setTimeout(() => {
            func(event);
        }, delay);
    };
}

