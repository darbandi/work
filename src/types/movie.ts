import { CommonTypes } from './commonTypes'

export interface IMovie extends CommonTypes {
  title: string
  enTitle: string
  summary: string
  description: string
  releaseYear: number
  rate: number
  country: string
  language: string
  view: number
  duration: string
}
