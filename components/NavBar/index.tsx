import React from 'react';
import Link from 'next/link';
import { CartContext } from '../../context/CartContextProvider';

interface Props {
  user?: any;
  handleLogout?: () => void;
}

const NavBar = (props: Props): JSX.Element => {
  const { count } = React.useContext(CartContext);
  // const { user, handleLogout } = props;

  // return (
  //   <nav>
  //     {!user && (
  //       <Link href="/log-in">
  //         <a>Log In</a>
  //       </Link>
  //     )}
  //     {!user && (
  //       <Link href="/sign-up">
  //         <a>Sign Up</a>
  //       </Link>
  //     )}
  //     <Link href="/cart">
  //       <a>Cart</a>
  //     </Link>
  //     {user && <button onClick={handleLogout}>Log Out</button>}
  //   </nav>
  // );
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/cart">
        <a>{`Cart (${count})`}</a>
      </Link>
    </nav>
  );
};

export default NavBar;
