export type ThemeType = {
  theme: {
    name: 'light-theme' | 'dark-theme'
    direction: 'rtl' | 'ltr'
    remCalc: (px: number, base?: number) => string
    colors: typeof commonColors
  }
}

export const commonColors = {
  white: '#FFFFFF',
  black: '#000000',
  gray_100: '#f8f9fa',
  gray_200: '#e9ecef',
  gray_300: '#dee2e6',
  gray_400: '#ced4da',
  gray_500: '#adb5bd',
  gray_600: '#6c757d',
  gray_700: '#495057',
  gray_800: '#343a40',
  gray_900: '#212529',
  red_100: '#FFE3E0',
  red_200: '#FFB3AD',
  red_300: '#FF8F73',
  red_400: '#FF6B3D',
  red_500: '#FF5630',
  red_600: '#DE350B',
  red_700: '#BF2600',
  red_800: '#9B1C00',
  red_900: '#7B0000',
  yellow_100: '#FFF7E6',
  yellow_200: '#FFE7B3',
  yellow_300: '#FFD580',
  yellow_400: '#FFC100',
  yellow_500: '#FFAB00',
  yellow_600: '#E6A200',
  yellow_700: '#C68600',
  yellow_800: '#8C4F00',
  yellow_900: '#7F5F00',
  green_100: '#E3FCEF',
  green_200: '#ABF5D1',
  green_300: '#79F2C0',
  green_400: '#57D9A3',
  green_500: '#36B37E',
  green_600: '#00875A',
  green_700: '#006644',
  green_800: '#004D40',
  green_900: '#0F6B58',
  blue_100: '#E6F6FF',
  blue_200: '#B3E6FF',
  blue_300: '#80D8FF',
  blue_400: '#4DC3FC',
  blue_500: '#00B8D9',
  blue_600: '#00A3BF',
  blue_700: '#008DA6',
  blue_800: '#006C7D',
  blue_900: '#003E53',
  purple_100: '#F2EBFE',
  purple_200: '#DBD2FE',
  purple_300: '#BFA5F5',
  purple_400: '#A278E4',
  purple_500: '#6554C0',
  purple_600: '#5243AA',
  purple_700: '#403294',
  purple_800: '#322873',
  purple_900: '#1D1145',
}

const remCalc = (px: number, base = 16) => {
  return (1 / base) * px + 'rem'
}

const common = {
  remCalc,
  direction: 'rtl',
}

export const light = {
  name: 'light-theme',
  colors: {
    ...commonColors,
  },
  ...common,
}

export const dark = {
  name: 'dark-theme',
  colors: {
    ...commonColors,
  },
  ...common,
}
