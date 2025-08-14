import { Variants } from 'framer-motion';

// Consistent animation variants for page-wide use
export const pageAnimations: { [key: string]: Variants } = {
  // For main containers and hero sections
  container: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  },

  // For individual items that fade in from top
  fadeInDown: {
    initial: { 
      opacity: 0, 
      y: -20 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  },

  // For items that fade in from bottom (cards, etc)
  fadeInUp: {
    initial: { 
      opacity: 0, 
      y: 30 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  },

  // For items that fade in from left
  fadeInLeft: {
    initial: { 
      opacity: 0, 
      x: -30 
    },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  },

  // For items that fade in from right
  fadeInRight: {
    initial: { 
      opacity: 0, 
      x: 30 
    },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  },

  // Simple fade in
  fadeIn: {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }
};

// Viewport config for animations
export const viewportConfig = {
  once: true,
  margin: "-50px"
};

// Stagger animation for lists
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Individual item animation for staggered lists
export const staggerItem: Variants = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const
    }
  }
};

// Page transition for route changes
export const pageTransition = {
  initial: { 
    opacity: 0,
    y: 10
  },
  animate: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const
    }
  },
  exit: { 
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2
    }
  }
};