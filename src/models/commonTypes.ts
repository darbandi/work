import mongoose, { Schema } from 'mongoose'
import { CommonTypes } from '@/types/commonTypes'

export const CommonTypesSchema: Schema<CommonTypes> = new mongoose.Schema({
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})
