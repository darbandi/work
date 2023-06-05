import mongoose from 'mongoose'

export interface IProfile {
  phone: string
  address: string
  user: {
    type: mongoose.Types.ObjectId
    ref: 'User'
  }
}
