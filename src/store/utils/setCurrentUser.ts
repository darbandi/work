import type { SetState } from '@/types/zustand'
import type { IUser } from '@/types/user'

export const setCurrentUser =
  (user: IUser | undefined) =>
  (set: SetState): void => {
    set({ user })
  }
