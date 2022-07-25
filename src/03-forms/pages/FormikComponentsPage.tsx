import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

export const FormikComponentsPage = () => {
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
            <label htmlFor='firstName'>First name</label>
            <Field type='text' name='firstName' />
            <ErrorMessage component='span' name='firstName' />

            <label htmlFor='lastName'>Last name</label>
            <Field type='text' name='lastName' />
            <ErrorMessage component='span' name='lastName' />

            <label htmlFor='email'>Email address</label>
            <Field type='email' name='email' />
            <ErrorMessage component='span' name='email' />

            <label htmlFor='email'>Job type</label>
            <Field as='select' name='jobType'>
              <option value=''>Pick something</option>
              <option value='developer'>Developer</option>
              <option value='designer'>Designer</option>
              <option value='it-senior'>IT Senior</option>
              <option value='it-jr'>IT Jr.</option>
            </Field>
            <ErrorMessage component='span' name='jobType' />

            <label>
              <Field type='checkbox' name='terms' />
              Terms & conditions
            </label>
            <ErrorMessage component='span' name='terms' />

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
