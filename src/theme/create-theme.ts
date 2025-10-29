import { extendTheme } from '@mui/material/styles';

import { colorSchemes } from './color-schemes';
import type { Theme } from './types';
import { typography } from './typography';
import { components } from './components/component';


declare module '@mui/material/styles' {
  interface Components {
    MuiDataGrid?: {
      defaultProps?: any;
      styleOverrides?: {
        columnHeaderTitle?: any;
        [key: string]: any;
      };
    };
  }
}
declare module '@mui/material/Dialog' {
  interface DialogProps {
    slideDirection?: 'up' | 'down' | 'left' | 'right';
  }
}


export function createTheme(): Theme {
  const theme = extendTheme({
    breakpoints: { values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1440 } },
   components,
    colorSchemes,
    
    shape: { borderRadius: 7 },
    typography,
  });

  return theme;
}
