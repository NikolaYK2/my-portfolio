export const MyContactsAnimation = {
  containerInput: {
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  },
  inputItem: {
    hidden: {x: '-100%', opacity: 0},
    visible: {
      x: 0,
      opacity: 1
    }
  },
  textareaItem: {
    hidden: {x: '100%', opacity: 0},
    visible: {
      x: 0,
      opacity: 1,
      transition: {
      }
    }
  },
  button: {
    hidden: {y: '100%', opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0,
      }
    }
  }
}