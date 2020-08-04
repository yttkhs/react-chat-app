import React, {useLayoutEffect, useState} from 'react';
import {Link, RouteComponentProps, withRouter, Redirect} from 'react-router-dom'
import {useForm} from "react-hook-form";
import firebase from '../lib/firebase'

type Props = {
  history: RouteComponentProps["history"]
}

type Inputs = {
  email: string
  password: string
}

const Login: React.FC<Props> = ({history}) => {
  const [user, setUser] = useState<Boolean | null>(null)

  // use React Hook Form
  // Library for form validation
  const {register, handleSubmit, errors} = useForm<Inputs>();

  // Settings that require input fields
  const onRequired = register({required: true})

  // User authentication with email address and password
  // redirect to home screen if successful
  const handleLoginFormSubmit = (values: Inputs): void => {
    firebase.auth()
      .signInWithEmailAndPassword(
        values.email,
        values.password
      )
      .then(() => history.push("/"))
      .catch(error => alert(error))
  }

  useLayoutEffect(() => {

    // Get currently logged in user
    const getUserLoginStatus = firebase.auth()
      .onAuthStateChanged(user => {

        // Determine if user is logged in
        if (user) {
          setUser(true)
        } else {
          setUser(false)
        }
      })

    // Clean Up
    return () => getUserLoginStatus();
  }, [])

  // Checking if the user is logged in
  if (user === null) return null

  return user

    // Redirect to home if user is logged in
    ? <Redirect to="/" />

    // Show login screen if user is not logged in
    : (
      <div>
        <form onSubmit={handleSubmit(handleLoginFormSubmit)}>
          <label>
            <input type="email" name="email" ref={onRequired} />
            {errors.email && <p>Please enter your email address</p>}
          </label>
          <label>
            <input type="password" name="password" ref={onRequired} />
            {errors.password && <p>Please enter your password</p>}
          </label>
          <button type="submit">LOGIN</button>
        </form>
        <div>
          <Link to="/sign-up">SIGN UP</Link>
        </div>
      </div>
    )
};

export default withRouter(Login);
