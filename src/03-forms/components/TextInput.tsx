import { ErrorMessage, useField } from 'formik'

interface Props {
  label: string
  name: string
  type?: 'text' | 'email' | 'password'
  placeholder?: string
  [x: string]: unknown
}

export const TextInput = ({ label, ...props }: Props) => {
  const [field] = useField(props)

  return (
    <>
      <label htmlFor={(props.id as string) || props.name}>{label}</label>
      <input
        type={props.type || 'text'}
        placeholder={props.placeholder}
        className='text-input'
        {...field}
      />
      <ErrorMessage name={props.name} component='span' />
    </>
  )
}
