
  import type { Components } from '@mui/material/styles';
  
  import type { Theme } from '../types';
  
  export const MuiTextField = {
    styleOverrides: {
        root: {

    '& .MuiInputBase-root ': {
    borderRadius: '8px',
    '&::placeholder': {
        fontSize: '13px',
        textAlign: 'left',
        alignItems: 'center',
        fontWeight: '600',
    },
    bgcolor: '#5a11d6ff',
    border: '2px solid #21264E',
    },
            }
              
    },
  } satisfies Components<Theme>['MuiTextField'];
  
  