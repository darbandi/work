import mongoose, { Model, Schema } from 'mongoose'
import type { IOtp } from '@/types/otp'

const OtpSchema: Schema<IOtp> = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  createAt: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  mobile: {
    type: String,
    required: true,
  },
})

OtpSchema.methods.toJSON = function () {
  const object = this.toObject()
  delete object.password
  object.id = object._id.toString()
  delete object._id
  delete object.__v
  return object
}

export const Otp = (mongoose.models.Otp ||
  mongoose.model('Otp', OtpSchema)) as typeof Model<IOtp>
