import type { GetState, SetState } from '@/types/zustand'

export const increment = (set: SetState, get: GetState) => (): void => {
  set({
    count: get().count + 1,
  })
}
