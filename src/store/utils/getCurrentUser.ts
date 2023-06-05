import { getCurrentUserApi } from '@/apis'
import type { SetState } from '@/types/zustand'
import type { IUserOutput } from '@/types/user'

export const getCurrentUser =
  (id: string) =>
  (set: SetState): void => {
    getCurrentUserApi({ id }).then((res: IUserOutput) => {
      set({ user: res.data })
    })
  }
