export default {
  white: {
    lightest: (op = 1) => `rgba(255, 255, 255, ${op})`,
  },

  black: {
    darkest: (op = 1) => `rgba(255, 255, 255, ${op})`,
  },
};
