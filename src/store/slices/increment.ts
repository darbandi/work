import type { GetState, SetState } from '@/store'

export const increment = (set: SetState, get: GetState) => (): void => {
  set({
    count: get().count + 1,
  })
}
