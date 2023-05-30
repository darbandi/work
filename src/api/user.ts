import { IUser } from '@models'

type Props = { id: string }

export async function getCurrentUser({ id }: Props): Promise<{ data: IUser }> {
  const data = await fetch(`${process.env.API_URL}/api/users/${id}`)
  const result = await data.json()
  return result
}
