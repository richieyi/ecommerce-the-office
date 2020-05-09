import React from 'react';

interface Props {
  onSubmit: (email: string, password: string) => void;
  buttonText: string;
}

const EmailPasswordForm = (props: Props): JSX.Element => {
  const { onSubmit, buttonText } = props;
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (
    e: React.FormEvent<HTMLButtonElement | HTMLFormElement>
  ): void => {
    e.preventDefault();
    onSubmit(email, password);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="text" value={email} onChange={handleEmail} />
      <input
        name="password"
        type="password"
        value={password}
        onChange={handlePassword}
      />
      <button onClick={handleSubmit}>{buttonText}</button>
    </form>
  );
};

export default EmailPasswordForm;
