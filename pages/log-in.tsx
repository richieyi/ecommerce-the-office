import React from 'react';
import { auth } from '../firebase';

import EmailPasswordForm from '../components/EmailPasswordForm';

const LogIn = (): JSX.Element => {
  const handleSubmit = (email: string, password: string): void => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return <EmailPasswordForm onSubmit={handleSubmit} buttonText="Log In" />;
};

export default LogIn;
