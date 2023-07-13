import { Toaster } from 'react-hot-toast'

export const UI_Toast = (): JSX.Element => {
  return (
    <Toaster
      position='top-center'
      reverseOrder={false}
      gutter={8}
      containerClassName=''
      containerStyle={{}}
      toastOptions={{
        className: '',
        duration: 5000,
        style: {
          background: '#363636',
          color: '#fff',
        },

        // Default options for specific types
        success: {
          duration: 3000,
        },
      }}
    />
  )
}
