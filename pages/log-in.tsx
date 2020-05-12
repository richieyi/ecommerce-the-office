// import React from 'react';
// import { useRouter } from 'next/router';
// import { auth } from '@firebase';

// import EmailPasswordForm from '@components/EmailPasswordForm';

// const LogIn = (): JSX.Element => {
//   const router = useRouter();

//   const handleSubmit = (email: string, password: string): void => {
//     auth
//       .signInWithEmailAndPassword(email, password)
//       .then((res) => {
//         console.log(res);
//         router.push('/');
//       })
//       .catch((err) => console.log(err));
//   };

//   return <EmailPasswordForm onSubmit={handleSubmit} buttonText="Log In" />;
// };

// export default LogIn;

import React from 'react';
import { NextPage } from 'next';

const LogInPage: NextPage = () => {
  return <div />;
};

export default LogInPage;
