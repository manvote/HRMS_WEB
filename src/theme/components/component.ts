import type { Components } from '@mui/material/styles';
import type { Theme } from '../types';
import{MuiOutlinedInput} from './outlined-input';
import{MuiInputLabel} from './input-label';
import{MuiMenu} from './mui-menu';
import{MuiMenuItem} from './muimenu-item';


export const components = {
MuiOutlinedInput,
MuiInputLabel,
MuiMenu,
MuiMenuItem,
} satisfies Components<Theme>;
