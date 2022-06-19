import React from 'react';
import {
  FooterWrapper,
  Copyright,
  CopyrightText,
} from './Footer.style';
import { Brand } from '~/common/Brand';

const Footer = () => {
  return (
    <FooterWrapper>
      <Copyright>
        <Brand>Multi Search</Brand>
        <CopyrightText>
          {new Date().getFullYear()} - Developed by &nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/dominggo1999"
          >dominggo1999
          </a>
        </CopyrightText>
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;
