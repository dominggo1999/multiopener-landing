import React from 'react';
import { Link } from 'react-router-dom';
import { NotFoundWrapper, Text, Description } from './NotFound.style';

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <Text>
        404
      </Text>
      <Description>
        Page Not Found
      </Description>
      <Link to="/">
        Back To Home
      </Link>
    </NotFoundWrapper>
  );
};

export default NotFound;
