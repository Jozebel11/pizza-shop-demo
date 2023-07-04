export const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0,
        staggerChildren: 0.2,
      },
    },
  };

  export const ulContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };
  
  export const item = {
    hidden: { y: "130%" },
    show: { y: "0%", transition: { duration: 0.5 } },
  };

  export const liItem = {
    hidden: { y: "130%" },
    show: { y: "0%", transition: { duration: 0.5} },
  };

  export const scrollContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  export const itemLeft = {
    hidden: { x: "200%" },
    show: { x: "0%", transition: { duration: 0.5 } },
  };

  export const itemRight = {
    hidden: { x: "-200%" },
    show: { x: "0%", transition: { duration: 0.5 } },
  };

  export const underlineRight = {
    hidden: { x: "-200%" },
    show: { x: "0%", transition: { duration: 1, delay: 0.2 } },
  };

  export const underlineLeft = {
    hidden: { x: "200%" },
    show: { x: "0%", transition: { duration: 1, delay: 0.2 } },
  };

  export const videoContainer = {
    hidden: { opacity: 0, y: '100%'},
    show: {
      opacity: 1,
      y: '0%',
      transition: {
        delayChildren: 0.5,
        duration: 0.5
        
      },
    },
  };

  export const beardItem = {
    hidden: { x: "130%", rotate: '180deg' },
    show: { x: "0%", transition: { duration: 0.5 }, rotate: '0deg' },
  };