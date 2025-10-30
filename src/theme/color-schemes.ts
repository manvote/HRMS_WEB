import type { ColorSystemOptions } from '@mui/material/styles';
import type { ColorScheme } from './types';

declare module '@mui/material/styles' {
  interface PaletteColor {
    extraLight?: string;
  }
  interface SimplePaletteColorOptions {
    extraLight?: string;
  }
}

export const colorSchemes = {
  dark: {
    palette: {
      primary: {
        main: '#3B3F70',        // deep navy
        light: '#4C518C',
        dark: '#2B2E52',
        extraLight: '#E4E6F3',
      },
      secondary: {
        main: '#587DBD',        // blue button
        light: '#7EA3E0',
        dark: '#365C91',
      },
      success: {
        main: '#198754',
        light: '#DFF5E1',
        dark: '#146C43',
        contrastText: '#fff',
      },
      info: {
        main: '#6C757D',
        light: '#DEE2E6',
        dark: '#343A40',
        contrastText: '#fff',
      },
      error: {
        main: '#DC3545',
        light: '#F8D7DA',
        dark: '#B02A37',
        contrastText: '#fff',
      },
      warning: {
        main: '#FFC107',
        light: '#FFF3CD',
        dark: '#B38F00',
        contrastText: '#000',
      },
      grey: {
        100: '#F8F9FA',
        200: '#E9ECEF',
        300: '#DEE2E6',
        400: '#ADB5BD',
        500: '#6C757D',
        600: '#343A40',
      },
      text: {
        primary: '#212529',
        secondary: '#6C757D',
      },
      action: {
        hover: '#F0F0F5',
        disabledBackground: '#E4E4E4',
      },
      divider: '#E4E4E4',
      background: {
        default: '#F5F5F5',
        paper: '#FFFFFF',
      },
      TableCell: {
        border: '#E4E4E4',
      },
      Alert: {
        errorStandardBg: '#FFFFFF',
        infoStandardBg: '#FFFFFF',
        successStandardBg: '#FFFFFF',
        warningStandardBg: '#FFFFFF',
      },
      Avatar: {
        defaultBg: '#7C8FAC',
      },
    },
  },

  light: {
    palette: {
      primary: {
        main: '#3B3F70',
        light: '#4C518C',
        dark: '#2B2E52',
        extraLight: '#E4E6F3',
      },
      secondary: {
        main: '#587DBD',
        light: '#7EA3E0',
        dark: '#365C91',
      },
      success: {
        main: '#198754',
        light: '#DFF5E1',
        dark: '#146C43',
        contrastText: '#fff',
      },
      info: {
        main: '#6C757D',
        light: '#E9ECEF',
        dark: '#343A40',
        contrastText: '#fff',
      },
      error: {
        main: '#DC3545',
        light: '#F8D7DA',
        dark: '#B02A37',
        contrastText: '#fff',
      },
      warning: {
        main: '#FFC107',
        light: '#FFF3CD',
        dark: '#B38F00',
        contrastText: '#000',
      },
      grey: {
        100: '#F8F9FA',
        200: '#E9ECEF',
        300: '#DEE2E6',
        400: '#ADB5BD',
        500: '#6C757D',
        600: '#343A40',
      },
      text: {
        primary: '#212529',
        secondary: '#6C757D',
      },
      action: {
        hover: '#F0F0F5',
        disabledBackground: '#E4E4E4',
      },
      divider: '#E4E4E4',
      background: {
        default: '#F5F5F5',
        paper: '#FFFFFF',
      },
      TableCell: {
        border: '#E4E4E4',
      },
      Alert: {
        errorStandardBg: '#FFFFFF',
        infoStandardBg: '#FFFFFF',
        successStandardBg: '#FFFFFF',
        warningStandardBg: '#FFFFFF',
      },
    },
  },
} satisfies Partial<Record<ColorScheme, ColorSystemOptions>>;
