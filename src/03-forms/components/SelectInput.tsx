import { ErrorMessage, useField } from 'formik'

interface Props {
  label: string
  name: string
  [x: string]: unknown
}

export const SelectInput = ({ label, ...props }: Props) => {
  const [field] = useField(props)

  return (
    <>
      <label htmlFor={(props.id as string) || props.name}>{label}</label>
      <select {...field} {...props} />
      <ErrorMessage name={props.name} component='span' />
    </>
  )
}
