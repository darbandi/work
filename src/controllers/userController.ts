import { NextApiRequest, NextApiResponse } from 'next'
import { User, Profile } from '@/models'

// Get all users
export const getAllUsers = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  try {
    const {
      page = 1,
      perPage = 10,
      userName = '',
      email = '',
    } = req.query || {}
    const filters = {
      ...(userName ? { userName: { $regex: userName } } : {}),
      ...(email ? { email: { $regex: email } } : {}),
    }
    const users = await User.find(filters)
      .skip((+page - 1) * +perPage)
      .limit(+perPage)
    const totalCount = await User.countDocuments(filters)
    res.status(200).json({
      success: true,
      data: users,
      meta: {
        totalCount,
        page,
        perPage,
      },
    })
  } catch (error) {
    res.status(400).json({ success: false, error })
  }
}

// Create a new user
export const createUser = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  try {
    const user = await User.create(req.body)
    res.status(201).json({ success: true, data: user.toJSON() })
  } catch (error) {
    res.status(400).json({ success: false, error })
  }
}

// Get a single user by ID
export const getUserById = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  try {
    const user = await User.findById(req.query.id)
    const profile = await Profile.findOne({ user: req.query.id })
    res.status(200).json({ success: true, data: { ...user.toJSON(), profile } })
  } catch (error) {
    res.status(400).json({ success: false, error })
  }
}

// Update a user
export const updateUser = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  try {
    const user = await User.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
    })
    if (!user) {
      return res.status(400).json({ success: false })
    }
    res.status(200).json({ success: true, data: user.toJSON() })
  } catch (error) {
    res.status(400).json({ success: false, error })
  }
}

// Delete a user
export const deleteUser = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  try {
    const deletedUser = await User.findByIdAndRemove(req.query.id)
    if (!deletedUser) {
      return res.status(400).json({ success: false })
    }
    res.status(200).json({ success: true, data: {} })
  } catch (error) {
    res.status(400).json({ success: false, error })
  }
}
