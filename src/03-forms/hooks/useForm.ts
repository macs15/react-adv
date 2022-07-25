import { ChangeEvent, useState } from 'react'

export const useForm = <T>(initialState: T) => {
  const [form, setForm] = useState(initialState)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget

    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const resetForm = () => setForm({ ...initialState })

  const isValidEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }

  return {
    form,
    ...form,

    onChange,
    resetForm,
    isValidEmail
  }
}
