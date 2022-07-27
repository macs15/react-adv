import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import {
  FormikAbstractPage,
  FormikBasicPage,
  FormikComponentsPage,
  FormikYupPage,
  RegisterFormikPage,
  RegisterPage
} from '../03-forms/pages'

import logo from '../logo.svg'

export const Navigation = () => {
  return (
    <Router>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt='React Logo' />
          <ul>
            <li>
              <NavLink to='/' activeClassName='nav-active' exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' activeClassName='nav-active' exact>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='/formik-basic' activeClassName='nav-active' exact>
                Formik basic
              </NavLink>
            </li>
            <li>
              <NavLink to='/formik-yup' activeClassName='nav-active' exact>
                Formik yup
              </NavLink>
            </li>
            <li>
              <NavLink to='/formik-components' activeClassName='nav-active' exact>
                Formik components
              </NavLink>
            </li>
            <li>
              <NavLink to='/formik-abstract' activeClassName='nav-active' exact>
                Formik abstract
              </NavLink>
            </li>
            <li>
              <NavLink to='/formik-register' activeClassName='nav-active' exact>
                Formik register
              </NavLink>
            </li>
            <li>
              <NavLink to='/users' activeClassName='nav-active' exact>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/about'>
            <h1>About</h1>
          </Route>
          <Route path='/users'>
            <h1>Users</h1>
          </Route>
          <Route path='/formik-basic'>
            <FormikBasicPage />
          </Route>
          <Route path='/formik-yup'>
            <FormikYupPage />
          </Route>
          <Route path='/formik-components'>
            <FormikComponentsPage />
          </Route>
          <Route path='/formik-abstract'>
            <FormikAbstractPage />
          </Route>
          <Route path='/formik-register'>
            <RegisterFormikPage />
          </Route>
          <Route path='/'>
            <RegisterPage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
