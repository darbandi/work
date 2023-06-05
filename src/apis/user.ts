import type { GetCurrentUserApiInput, IUserOutput } from '@/types/user'

export async function getCurrentUserApi({
  id,
}: GetCurrentUserApiInput): Promise<IUserOutput> {
  const data = await fetch(`${process.env.API_URL}/api/users/${id}/`)
  const result = await data.json()
  return result
}
