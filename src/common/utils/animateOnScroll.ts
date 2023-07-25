export const animationOnScroll = (selector: string, className: string) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const element = entry.target as HTMLElement // приводим тип к HTMLElement
            if (entry.isIntersecting) {
                element.classList.add(className);
            } else {
                element.classList.remove(className);
            }
        })
    })
    const elements = document.querySelectorAll(selector)
    elements.forEach((el) => observer.observe(el))
}