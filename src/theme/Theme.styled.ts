const commonColors = {
  bg_dark_50: '#00000050',
  text_main: '#FFFFFF',
}

const remCalc = (px: number, base = 16) => {
  return (1 / base) * px + 'rem'
}

const common = {
  remCalc,
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
