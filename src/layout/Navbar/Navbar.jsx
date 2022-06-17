import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarWrapper, Brand } from './Navbar.style';
import ThemeSwitch from '~/common/ThemeSwitch/ThemeSwitch';

const Navbar = () => {
  return (
    <NavbarWrapper as="nav">
      <Link to="/">
        <Brand>Multi Search</Brand>
      </Link>
      <ThemeSwitch />
    </NavbarWrapper>
  );
};

export default Navbar;
