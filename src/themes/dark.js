import common from './common';

const lightTheme = {
  ...common,
  bg: {
    default: '#181818',
    reverse: '#FEFEFE',
  },
  text: {
    default: '#FEFEFE',
    reverse: '#181818',
  },
  shadows: {
    default: '0 10px 30px -10px rgba(2, 12, 27, 0.7)',
    small: '0 10px 30px -10px rgba(2, 12, 27, 0.7)',
    medium: '0 20px 30px -15px rgba(2,12,27, 0.7)',
    large: '0 30px 60px rgba(0, 0, 0, 0.12) ',
  },
};

export default lightTheme;
