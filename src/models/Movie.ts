import mongoose, { Model, Schema } from 'mongoose'
import { CommonTypesSchema } from './commonTypes'
import type { IMovie } from '@/types/movie'

const MovieSchema: Schema<IMovie> = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  enTitle: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  releaseYear: {
    type: Number,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
    default: 0,
  },
  country: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  view: {
    type: Number,
    required: true,
    default: 0,
  },
  duration: {
    type: String,
  },
}).add(CommonTypesSchema)

MovieSchema.methods.toJSON = function () {
  const userObject = this.toObject()
  delete userObject.password
  userObject.id = userObject._id.toString()
  delete userObject._id
  delete userObject.__v
  return userObject
}

export const Movie = (mongoose.models.Movie ||
  mongoose.model('Movie', MovieSchema)) as typeof Model
