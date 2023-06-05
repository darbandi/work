import React from 'react'

export function LoginPage(): React.JSX.Element {
  // const [error, setError] = useState('')
  // const router = useRouter()
  // const { data: session, status } = useSession()
  // const getCurrentUser = useStore((store) => store.getCurrentUser)
  // const user = useStore((store) => store.user)
  // console.log("🚀 ~ file: index.tsx:12 ~ LoginPage ~ user:", user)

  // useEffect(() => {
  //   getCurrentUser?.('64568c9fc1ec051d4c89b115')
  // }, [])

  // useEffect(() => {
  //   if (session?.user) {
  //     const user = session.user as { id: string }
  //     getCurrentUser?.(user?.id as string)
  //   }
  // }, [session, getCurrentUser])

  // const onSubmit = async ({ email, password }: { email: string, password: string }) => {
  //   const result = await signIn('credentials', {
  //     email,
  //     password,
  //     redirect: false,
  //   })
  //   if (result.error) {
  //     setError(result.error)
  //   }
  // }

  // useEffect(() => {
  //   onSubmit({ email: 'admin@hasti.co', password: 'Abc@123456' })
  // }, [])

  // if (status === 'loading') return null
  // if (status === 'authenticated') {
  //   router.push('/')
  //   return null
  // }

  return (
    <div>login</div>
    // <Box display='flex' alignItems='center' justifyContent='center'>
    //   <Box
    //     display='flex'
    //     flexDirection='column'
    //     alignItems='center'
    //     width={500}
    //     mt={8}
    //   >
    //     <LockOutlined />
    //     <Typography component='h1' variant='h5'>
    //       Sign in
    //     </Typography>
    //     <form onSubmit={handleSubmit(onSubmit)}>
    //       <TextField
    //         label='Email'
    //         variant='outlined'
    //         margin='normal'
    //         fullWidth
    //         {...register('email')}
    //         error={Boolean(errors.email)}
    //         helperText={<>{errors.email?.message}</>}
    //       />
    //       <TextField
    //         label='Password'
    //         variant='outlined'
    //         margin='normal'
    //         type='password'
    //         fullWidth
    //         {...register('password')}
    //         error={Boolean(errors.password)}
    //         helperText={<>{errors.email?.message}</>}
    //       />
    //       <Button
    //         // disabled={!userLoading}
    //         type='submit'
    //         variant='contained'
    //         color='primary'
    //       >
    //         Sign in
    //       </Button>
    //     </form>
    //     {error && <Typography color='error'>{error}</Typography>}
    //   </Box>
    // </Box>
  )
}
export default LoginPage
