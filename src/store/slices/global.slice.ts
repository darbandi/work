import { signOut } from 'next-auth/react'
import { StateCreator } from 'zustand'
import { getCurrentUser } from '@/api'
import { IUser, User } from '@/models'

export type GlobalSliceType = {
  themeMode: string
  user: IUser
  signOut: () => Promise<void>
  getCurrentUser: (id: string) => Promise<void>
  changeTheme: () => Promise<void>
}

const emptyUser = new User()

export const globalSlice: StateCreator<GlobalSliceType> = (set) => ({
  themeMode: 'dark',
  user: emptyUser,
  signOut: async () => {
    await signOut({ redirect: false })
    set({ user: emptyUser })
  },
  getCurrentUser: async (id: string) => {
    const result = await getCurrentUser({ id })
    set({ user: result.data })
  },
  changeTheme: async () => {
    set((state) => ({
      themeMode: state.themeMode === 'dark' ? 'light' : 'dark',
    }))
  },
})
