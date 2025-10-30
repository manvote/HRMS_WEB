import type { ThemeOptions } from '@mui/material/styles';
import '../index.css';

export const typography: NonNullable<ThemeOptions['typography']> = {
  fontFamily: "'Poppins', sans-serif",

  caption: { fontSize: '0.75rem', fontWeight: 400, lineHeight: 1.66,color: '#1a214f' },
  overline: {
    fontSize: '0.75rem',
    fontWeight: 500,
    letterSpacing: '0.5px',
    lineHeight: 2.5,
    textTransform: 'uppercase',
  },
  h1: { fontWeight: 700, fontSize: "88px",color: '#ffffff' },
  h2: {fontWeight: 600, fontSize: "41px",color: '#ffffff' },
  h3: {fontWeight: 600, fontSize: "24px",color: '#21264EA3' },
  h4: {fontWeight: 600, fontSize: "27px",color: '#21264EA3' },
  h5: { fontSize: '13px', fontWeight: 600,color: '#ffffffff' },
    h6: { fontSize: '24px', fontWeight: 600,color: '#ffffffff' },

  button: { textTransform: 'capitalize', fontWeight: 400 },
  body1: { fontSize: '13px', fontWeight: 600,color: '#f3f4f7ff' },
  body2: { fontSize: '0.75rem', fontWeight: 600, lineHeight: '1rem',color: '#21264EA3' },

  subtitle1: { fontSize: '0.875rem', fontWeight: 700, color: '#da2727ff' },
  subtitle2: { fontSize: '0.875rem', fontWeight: 400 },
};
