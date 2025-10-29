import type { Components } from '@mui/material/styles';
import type { Theme } from '../types';
import{MuiOutlinedInput} from './outlined-input';
import{MuiInputLabel} from './input-label';


export const components = {
MuiOutlinedInput,
MuiInputLabel
} satisfies Components<Theme>;
