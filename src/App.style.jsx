import tw, { styled } from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

export const AppWrapper = styled.div`
  ${tw`
    
  `}
`;

export const AppGlobalStyles = createGlobalStyle`
  body{
    ${tw`
      text-primary
    `}

    ${({ theme }) => theme === 'dark' && tw`
      bg-primary
      text-white
    `}
  }
`;
