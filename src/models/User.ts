import { hash } from 'bcrypt'
import mongoose, { Model, Schema } from 'mongoose'
import type { IUser } from '@/types/user'

const UserSchema: Schema<IUser> = new mongoose.Schema({
  mobile: String,
  userName: String,
  email: String,
  password: String,
  isActiveOtp: Boolean,
})

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }
  if (this.password) {
    this.password = await hash(this.password, 10)
  }
})

UserSchema.methods.toJSON = function () {
  const userObject = this.toObject()
  delete userObject.password
  userObject.id = userObject._id.toString()
  delete userObject._id
  delete userObject.__v
  return userObject
}

export const User = (mongoose.models.User ||
  mongoose.model('User', UserSchema)) as typeof Model
