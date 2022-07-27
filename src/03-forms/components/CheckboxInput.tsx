import { ErrorMessage, useField } from 'formik'

interface Props {
  label: string
  name: string
  textSide?: 'left' | 'right'
  [x: string]: unknown
}

export const CheckboxInput = ({ label, textSide = 'left', ...props }: Props) => {
  const [field] = useField({ ...props, type: 'checkbox' })

  return (
    <>
      <label>
        {textSide === 'right' && label}
        <input type='checkbox' {...field} {...props} />
        {textSide === 'left' && label}
      </label>
      <ErrorMessage name={props.name} component='span' />
    </>
  )
}
