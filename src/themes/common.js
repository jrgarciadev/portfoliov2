import mixins from '@styles/mixins';

export default {
  borderRadius: '0.375rem',
  fontFamily: {
    fontSans: 'Open Sans, -apple-system, BlinkMacSystemFont,Segoe UI, Helvetica, Arial',
    fontMono: 'Space Mono, SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace',
  },
  brand: {
    primary: '#3378F7',
    primaryLight: '#5F99FC',
    secondary: '#7DDEFB',
    accent: '#E2E3E3',
    danger: '#ff4d4f',
    warning: '#ffc312',
    success: '#0be881',
    gradient: {
      light: '#5F99FC',
      dark: '#357AF7',
    },
  },
  fontSize: {
    xxs: '0.9rem',
    xs: '1.1rem',
    sm: '1.3rem',
    md: '1.4rem',
    lg: '1.8rem',
    xl: '2.2rem',
    xxl: '2.6rem',
    heading: '4rem',
  },
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  fontw: {
    light: 300,
    regular: 400,
    semibold: 600,
    bold: 700,
  },
  transitions: {
    default: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
  },
  mixins,
};
