import type { SetState } from '@/types/zustand'
import type { IUser } from '@/types/user'

export const setCurrentUser =
  (user: IUser) =>
  (set: SetState): void => {
    set({ user })
  }
