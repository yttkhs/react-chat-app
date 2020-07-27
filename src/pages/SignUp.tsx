import React from 'react';
import {Link, withRouter, RouteComponentProps} from 'react-router-dom'
import firebase from '../lib/firebase'
import {useForm} from 'react-hook-form'

type Props = {
  history: RouteComponentProps["history"]
}

type Inputs = {
  email: string
  password: string
};

const SignUp: React.FC<Props> = ({history}) => {

  // use React Hook Form
  // Library for form validation
  const {register, handleSubmit, errors} = useForm<Inputs>();

  // Settings that require input fields
  const onRequired = register({required: true})

  // User registration with email address and password
  // redirect to login screen if successful
  const handleSignUpFormSubmit = (values: Inputs): void => {
    firebase.auth()
      .createUserWithEmailAndPassword(
        values.email,
        values.password
      )
      .then(() => history.push('/'))
      .catch((error) => alert(error))
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleSignUpFormSubmit)}>
        <label>
          <input type="email" name="email" ref={onRequired} />
          {errors.email && <p>Please enter your email address</p>}
        </label>
        <label>
          <input type="password" name="password" ref={onRequired} />
          {errors.password && <p>Please enter your password</p>}
        </label>
        <button type="submit">SIGN UP</button>
      </form>
      <div>
        <Link to="/login">LOGIN</Link>
      </div>
    </div>
  );
};

export default withRouter(SignUp);
