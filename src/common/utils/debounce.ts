export function debounce<TArgs extends unknown[]>(func: (...args: TArgs) => void, delay: number) {
  let timerId: ReturnType<typeof setTimeout> | undefined;

  return (...args: TArgs) => {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

