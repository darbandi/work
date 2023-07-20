import mongoose, { Model, Schema } from 'mongoose'
import { CommonTypesSchema } from './commonTypes'
import type { IGenre } from '@/types/genre'

const GenreSchema: Schema<IGenre> = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
}).add(CommonTypesSchema)

GenreSchema.methods.toJSON = function () {
  const userObject = this.toObject()
  delete userObject.password
  userObject.id = userObject._id.toString()
  delete userObject._id
  delete userObject.__v
  return userObject
}

export const Genre = (mongoose.models.Genre ||
  mongoose.model('Genre', GenreSchema)) as typeof Model
