import tw, { styled } from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

export const AppWrapper = styled.div`
  ${tw`
    
  `}
`;

export const AppGlobalStyles = createGlobalStyle`
body{
  ${({ theme }) => theme === 'dark' && tw`
    bg-black
    text-white
  `}
  }
`;
