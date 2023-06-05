import mongoose, { Model, Schema } from 'mongoose'
import type { IProfile } from '@/types/profile'

const ProfileSchema: Schema<IProfile> = new mongoose.Schema({
  phone: String,
  address: String,
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
})

ProfileSchema.methods.toJSON = function () {
  const profileObject = this.toObject()
  profileObject.id = profileObject._id.toString()
  delete profileObject._id
  delete profileObject.__v
  return profileObject
}

export const Profile = (mongoose.models.Profile ||
  mongoose.model('Profile', ProfileSchema)) as typeof Model
