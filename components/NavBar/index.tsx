import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { CartContext } from '../../context/CartContextProvider';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Header = styled.h1`
  margin: unset;
`;

const Anchor = styled.a`
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

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
    <Nav>
      <Link href="/">
        <Anchor>
          <Header>The Office Funko Pops</Header>
        </Anchor>
      </Link>
      <Link href="/cart">
        <Anchor>{`Cart (${count})`}</Anchor>
      </Link>
    </Nav>
  );
};

export default NavBar;
