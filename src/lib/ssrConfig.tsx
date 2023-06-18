import { getServerSession } from 'next-auth'
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
} from 'next'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import { initializeStore } from '@/store'

// getServerSideProps
export const ssrConfig: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const session = await getServerSession(context.req, context.res, authOptions)
  const zustandStore = initializeStore()

  return {
    props: {
      session,
      initialZustandState: JSON.parse(JSON.stringify(zustandStore.getState())),
    },
  }
}

// getStaticProps
export const ssgConfig: GetStaticProps = () => {
  const zustandStore = initializeStore()
  return {
    props: {
      initialZustandState: JSON.parse(JSON.stringify(zustandStore.getState())),
    },
  }
}
