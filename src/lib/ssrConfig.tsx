import { getServerSession } from 'next-auth'
import { GetServerSidePropsContext } from 'next'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import { initializeStore } from '@/store'

export const ssrConfig = async (
  context: GetServerSidePropsContext,
): Promise<unknown> => {
  const session = await getServerSession(context.req, context.res, authOptions)
  const zustandStore = initializeStore()

  return {
    props: {
      session,
      initialZustandState: JSON.parse(JSON.stringify(zustandStore.getState())),
    },
  }
}
