import { useAxios } from './tools'
import type {
  IUseDeleteUserInput,
  IUseDeleteUserOutput,
  IUseGetUserInput,
  IUseGetUserOutput,
  IUsePostUserOutput,
  IUseUpdateUserInput,
  IUseUpdateUserOutput,
} from '@/types/user'

export const useGetUser = ({ id }: IUseGetUserInput): IUseGetUserOutput => {
  const [{ data, loading, error }, refetch] = useAxios(
    {
      url: `users/${id}/`,
      method: 'GET',
    },
    { useCache: true },
  )

  return {
    data,
    loading,
    error,
    refetch,
  }
}

export const usePostUser = (): IUsePostUserOutput => {
  const [{ data, loading, error }, executePost] = useAxios(
    {
      url: 'users/',
      method: 'POST',
    },
    { manual: true },
  )

  return {
    data,
    loading,
    error,
    executePost,
  }
}

export const useUpdateUser = ({
  id,
}: IUseUpdateUserInput): IUseUpdateUserOutput => {
  const [{ data, loading, error }, executeUpdate] = useAxios(
    {
      url: `users/${id}/`,
      method: 'PUT',
    },
    { manual: true },
  )

  return {
    data,
    loading,
    error,
    executeUpdate,
  }
}

export const useDeleteUser = ({
  id,
}: IUseDeleteUserInput): IUseDeleteUserOutput => {
  const [{ data, loading, error }, executeDelete] = useAxios(
    {
      url: `users/${id}/`,
      method: 'DELETE',
    },
    { manual: true },
  )

  return {
    data,
    loading,
    error,
    executeDelete,
  }
}
