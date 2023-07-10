import { NextApiRequest, NextApiResponse } from 'next'
import { User } from '@/models'
import { Otp } from '@/models/Otp'
import { randomCode } from '@/tools'
import { IOtp, IOtpApiOutput } from '@/types/otp'
import { IUser } from '@/types/user'

export const sendOtp = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  try {
    const userOtp = await Otp.findOne({
      mobile: req.body.mobile,
      code: req.body.code,
    }).sort({ createdAt: -1 })
    if (userOtp) {
      const updatedUser = await User.findByIdAndUpdate(
        userOtp.userId.toString(),
        {
          isActiveOtp: true,
        },
        {
          new: true,
          runValidators: true,
        },
      )

      const output: IOtpApiOutput = {
        success: true,
        data: updatedUser.toJSON(),
      }
      await Otp.findByIdAndDelete(userOtp._id.toString())
      res.status(200).json(output)
    } else {
      res
        .status(200)
        .json({ success: false, message: 'otp code is not correct' })
    }
  } catch (error) {
    res.status(400).json({ success: false, error })
  }
}

export const getOtp = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  try {
    let user = await User.findOne({ mobile: req.query.mobile })
    if (!user) {
      const newUser: IUser = {
        mobile: String(req.query.mobile),
        userName: '',
        email: '',
        password: '',
        isActiveOtp: false,
      }
      user = await User.create(newUser)
    }
    const newRandomCode = randomCode()
    const newOtp: IOtp = {
      code: newRandomCode.toString(),
      createAt: new Date().toLocaleString(),
      userId: user.id,
      mobile: String(req.query.mobile),
    }

    await Otp.create(newOtp)
    const output: IOtpApiOutput = {
      success: true,
      data: user.toJSON(),
      message: `the otp code was sended to your mobile: ${req.query.mobile}`,
    }
    res.status(200).json(output)
  } catch (error) {
    res.status(400).json({ success: false, error })
  }
}
