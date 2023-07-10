export const randomCode = (min = 1000, max = 9999): number =>
  Math.floor(Math.random() * (max - min + 1) + min)
