export const itemVariants = [
  {
    hidden: {opacity: 0, x: -200}, // Слева
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.6,
      },
    },
  },
  {
    hidden: {opacity: 0, y: 200}, // Снизу
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.6,
      },
    },
  },
  {
    hidden: {opacity: 0, x: 200}, // Справа
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.6,
      },
    },
  },
];
