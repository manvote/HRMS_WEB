

import type { ColorSystemOptions } from '@mui/material/styles';
import type { ColorScheme } from './types';
declare module '@mui/material/styles' {
  interface PaletteColor {
    extraLight?: string; // Add your custom property
  }
  interface SimplePaletteColorOptions {
    extraLight?: string; // Add your custom property
  }
}

export const colorSchemes = {
  dark: {
    palette: {
      primary: {
        main: '#15b44aff',
        light: '#800be0ff',
        dark: '#1b9f6cff',
        extraLight:'#eddff9'
  
      },
      secondary: {
        main: '#16cc68ff',
        light: '#603588ff',
        dark: '#6a18c4',
      },
      success: {
        main: '#0c9d61',
        light: '#e5f5ec',
        dark: '#047445',
        contrastText: '#ffffff',
      },
      info: {
        main: '#df1010ff',
        light: '#cfcdcd',
        dark: '#393939',
        contrastText: '#ffffff',
      },
      error: {
        main: '#ec2d30',
        light: '#ffebee',
        dark: '#ec2d30',
        contrastText: '#ffffff',
      },
      warning: {
        main: '#ffc821',
        light: '#fff6da',
        dark: '#f64c4c',
        contrastText: '#ffffff',
      },
      // purple: {
      //   A50: '#6610f2',
      //   A100: '#9022FB',
      //   A200: '#6915B4',
      //   A250:'#3A006D',
      //   A300:'#3A006D'
      // },
      grey: {
        100: '#F2F6FA',
        200: '#EAEFF4',
        300: '#DFE5EF',
        400: '#7C8FAC',
        500: '#5A6A85',
        600: '#2A3547',
      },
      // blue:{
      //     primary:'#693AED'
      // },
      text: {
        primary: '#18dd11ff',
        secondary: '#6d6d6d',
        disabled:'#6d6d6d',
      },
  
      action: {
        disabledBackground: 'rgba(73,82,88,0.12)',
        hoverOpacity: 0.02,
        hover: '#101113ff',
      },
      divider: '#e5eaef',
      background: {
        default: '#efeeff',

        paper: '#ffffff',

      },
      TableCell: {
        border: '#ffffff',
      },
      Alert:{
        errorStandardBg: "#ffffff",
        infoStandardBg: "#ffffff",
        successStandardBg: "#ffffff",
        warningStandardBg:"#ffffff",
      },
      Avatar: {
        defaultBg: '#7C8FAC',
      }
    },
  },
  light: {
    palette: {
      primary: {
        main: '#21264E',
        light: '#720dc4ff',
        dark: '#601b9f',
        extraLight:'#eddff9'
  
      },
      secondary: {
        main: '#21264E',
        light: '#f1e2ff',
        dark: '#6a18c4',
      },
      success: {
        main: '#0c9d61',
        light: '#e5f5ec',
        dark: '#047445',
        contrastText: '#ffffff',
      },
      info: {
        main: '#6d6d6d',
        light: '#cfcdcd',
        dark: '#393939',
        contrastText: '#ffffff',
      },
      error: {
        main: '#ec2d30',
        light: '#ffebee',
        dark: '#ec2d30',
        contrastText: '#ffffff',
      },
      warning: {
        main: '#ffc821',
        light: '#fff6da',
        dark: '#f64c4c',
        contrastText: '#ffffff',
      },
      // purple: {
      //   A50: '#6610f2',
      //   A100: '#9022FB',
      //   A200: '#6915B4',
      //   A250:'#3A006D',
      //   A300:'#3A006D'
      // },
      grey: {
        100: '#F2F6FA',
        200: '#EAEFF4',
        300: '#DFE5EF',
        400: '#7C8FAC',
        500: '#5A6A85',
        600: '#2A3547',
      },
      // blue:{
      //     primary:'#693AED'
      // },
      text: {
        primary: '#ffffffff',
        secondary: '#0000007a',
      },
  
      action: {
        disabledBackground: 'rgba(73,82,88,0.12)',
        hoverOpacity: 0.02,
        hover: '#110c0cff',
      },
      divider: '#e5eaef',
      background: {
        default: '#efeeff',
        paper: '#ffffff',

      },
      TableCell: {
        border: '#ffffff', // Matches the divider color for consistency
      },
      Alert:{
        errorStandardBg: "#ffffff",
        infoStandardBg: "#ffffff",
        successStandardBg: "#ffffff",
        warningStandardBg:"#ffffff",
      }
    },
  },
} satisfies Partial<Record<ColorScheme, ColorSystemOptions>>;

