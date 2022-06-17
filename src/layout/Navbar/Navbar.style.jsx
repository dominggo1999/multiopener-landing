import tw, { styled } from 'twin.macro';
import { Wrapper } from '~/common/Wrapper';

export const NavbarWrapper = styled(Wrapper)`
  ${tw`
    flex
    justify-between 
    py-7
  `}
`;

export const Brand = styled.div`
  ${tw`
    dark:text-accent
    text-2xl 
    font-extrabold 
  `}
`;
