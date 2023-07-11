import { NextApiRequest, NextApiResponse } from 'next'
import { User } from '@/models'
import { Otp } from '@/models/Otp'
import { randomCode } from '@/tools'
import { IOtp, IOtpApiOutput } from '@/types/otp'
import { IUser } from '@/types/user'
import { serverMessages } from '@/assets/globalMessages/server'

export const sendOtp = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  try {
    const userOtp = await Otp.findOne({
      mobile: req.body.mobile,
    }).sort({ createAt: -1 })

    if (userOtp && userOtp.code === req.body.code) {
      const updatedUser = await User.findByIdAndUpdate(
        userOtp.userId.toString(),
        {
          isActiveOtp: true,
        },
      )
      const output: IOtpApiOutput = {
        success: true,
        data: updatedUser.toJSON(),
      }
      await Otp.deleteMany({ mobile: userOtp.mobile.toString() })
      res.status(200).json(output)
    } else {
      res.status(400).json({
        success: false,
        message: serverMessages.invalidOtpCode.defaultMessage,
      })
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
      message: serverMessages.sendOtpToYourPhone.defaultMessage,
    }
    res.status(200).json(output)
  } catch (error) {
    res.status(400).json({ success: false, error })
  }
}
