// import React from 'react';
// import { useRouter } from 'next/router';
// import { auth } from '../firebase';

// import EmailPasswordForm from '../components/EmailPasswordForm';

// const SignUp = (): JSX.Element => {
//   const router = useRouter();

//   const handleSubmit = (email: string, password: string): void => {
//     auth
//       .createUserWithEmailAndPassword(email, password)
//       .then((res) => {
//         console.log(res);
//         router.push('/');
//       })
//       .catch((err) => console.log(err));
//   };

//   return <EmailPasswordForm onSubmit={handleSubmit} buttonText="Sign Up" />;
// };

// export default SignUp;

import React from 'react';

const SignUp = () => {
  return <div />;
};

export default SignUp;
