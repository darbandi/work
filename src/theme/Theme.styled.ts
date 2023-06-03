const commonColors = {
  primary: '#F6BE00',
  secondary: '#0B0B0D',
  secondary70: '#0B0B0D70',
  text_main: '#FFFFFF',
  bg_main: '#FFFFFF',
  bg_main50: '#FFFFFF50',
  bg_dark_50: '#00000050',
  text_grey: '#515151',
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
