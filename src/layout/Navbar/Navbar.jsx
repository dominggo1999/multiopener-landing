import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarWrapper, Fixed } from './Navbar.style';
import ThemeSwitch from '~/common/ThemeSwitch/ThemeSwitch';
import { Brand } from '~/common/Brand';

const Navbar = () => {
  return (
    <Fixed>
      <NavbarWrapper>
        <Link to="/">
          <Brand>Multi Search</Brand>
        </Link>
        <ThemeSwitch />
      </NavbarWrapper>
    </Fixed>
  );
};

export default Navbar;
