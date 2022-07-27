import { Form, Formik } from 'formik'
import { FC } from 'react'
import * as Yup from 'yup'

import { TextInput } from '../components'

import '../styles/styles.css'

interface InitialValues {
  name: string
  email: string
  password: string
  passwordRepeat: string
}

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be 2 characters or more')
    .max(15, 'Name must be 15 characters or less')
    .required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must contain 6 characters or more')
    .required('Password is required'),
  passwordRepeat: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
})

export const RegisterFormikPage: FC = () => {
  const handleSubmit = (values: InitialValues) => {
    console.log(values)
  }

  return (
    <div>
      <h1>Register formik page</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          passwordRepeat: ''
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ resetForm }) => (
          <Form>
            <TextInput name='name' label='Full name' placeholder='First Name' />
            <TextInput name='email' type='email' label='Email address' placeholder='email@email' />
            <TextInput name='password' type='password' label='Password' placeholder='Password' />
            <TextInput
              name='passwordRepeat'
              type='password'
              label='Repeat password'
              placeholder='Repeat password'
            />

            <button type='submit'>Create</button>
            <button type='button' onClick={() => resetForm()}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
