import React from 'react';
import { auth } from '../firebase';

import EmailPasswordForm from '../components/EmailPasswordForm';

const SignUp = (): JSX.Element => {
  const handleSubmit = (email: string, password: string): void => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return <EmailPasswordForm onSubmit={handleSubmit} buttonText="Sign Up" />;
};

export default SignUp;
