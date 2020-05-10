import React from 'react';
import Link from 'next/link';

interface Props {
  user: any;
  handleLogout: () => void;
}

const NavBar = (props: Props): JSX.Element => {
  const { user, handleLogout } = props;

  return (
    <nav>
      {!user && (
        <Link href="/log-in">
          <a>Log In</a>
        </Link>
      )}
      {!user && (
        <Link href="/sign-up">
          <a>Sign Up</a>
        </Link>
      )}
      <Link href="/cart">
        <a>Cart</a>
      </Link>
      {user && <button onClick={handleLogout}>Log Out</button>}
    </nav>
  );
};

export default NavBar;
