import tw, { styled } from 'twin.macro';
import { Wrapper } from '~/common/Wrapper';

export const Fixed = styled.nav`
  ${tw` 
    h-20 
    fixed 
    w-full
    top-0 
    z-[8888]
    bg-white 
    dark:bg-primary  
    transition 
    transition-bg
    ease-out-sine
    duration-200 
    flex 
    items-center
  `}
`;

export const NavbarWrapper = styled(Wrapper)`
  ${tw`
    flex
    justify-between 
    w-full 
    bg-transparent
  `}
`;
