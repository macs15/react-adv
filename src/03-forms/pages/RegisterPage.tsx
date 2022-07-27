import { FC, FormEvent } from 'react'
import { useForm } from '../hooks/useForm'
import '../styles/styles.css'

export const RegisterPage: FC = () => {
  const { name, email, password, passwordRepeat, onChange, resetForm, isValidEmail } = useForm({
    name: '',
    email: '',
    password: '',
    passwordRepeat: ''
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div>
      <h1>register page</h1>

      <form onSubmit={handleSubmit}>
        <input value={name} type='text' name='name' placeholder='Name' onChange={onChange} />
        <input
          value={email}
          type='email'
          name='email'
          placeholder='Email'
          onChange={onChange}
          className={!isValidEmail(email) ? 'has-error' : ''}
        />
        {!isValidEmail(email) && <span>Invalid email</span>}
        <input
          value={password}
          type='password'
          name='password'
          placeholder='Password'
          onChange={onChange}
        />
        <input
          value={passwordRepeat}
          type='password'
          name='passwordRepeat'
          placeholder='Repeat password'
          onChange={onChange}
        />
        <button type='submit'>Create</button>
        <button onClick={resetForm}>Reset</button>
      </form>
    </div>
  )
}
