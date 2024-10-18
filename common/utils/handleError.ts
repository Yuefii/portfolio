import { toast } from 'react-toastify'

const handleError = (err: any) => {
  console.error('Error:', err)
  const message = err.response?.data?.message || 'Something went wrong'
  toast.error(message, { autoClose: 1000 })
}

export default handleError
