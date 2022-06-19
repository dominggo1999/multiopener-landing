import tw, { styled } from 'twin.macro';

export const AppWrapper = styled.div`
  ${tw`
    text-primary
    bg-white
    transition 
    transition-bg
    ease-out-sine
    duration-200 
    min-h-screen
  `}

  &.dark{
    ${tw`
      bg-primary
      text-white
    `}
  }
`;
