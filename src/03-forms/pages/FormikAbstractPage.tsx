import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { CheckboxInput, SelectInput, TextInput } from '../components'

import '../styles/styles.css'

export const FormikAbstractPage = () => {
  return (
    <div>
      <h1>Formik - Components tutorial</h1>

      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', terms: false, jobType: '' }}
        validationSchema={Yup.object({
          firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
          lastName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
          email: Yup.string().email().required('Required'),
          terms: Yup.bool().oneOf([true], 'You must accept terms and conditions'),
          jobType: Yup.string().notOneOf(['it-jr'], 'Option not allowed').required('Required')
        })}
        onSubmit={values => console.log(values)}
      >
        {() => (
          <Form>
            <TextInput label='First name' name='firstName' />
            <TextInput label='Last name' name='lastName' />
            <TextInput label='Email address' name='email' type='email' />

            <SelectInput label='Job type' name='jobType'>
              <option value=''>Pick something</option>
              <option value='developer'>Developer</option>
              <option value='designer'>Designer</option>
              <option value='it-senior'>IT Senior</option>
              <option value='it-jr'>IT Jr.</option>
            </SelectInput>

            <CheckboxInput label='Terms & conditions' name='terms' />

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
