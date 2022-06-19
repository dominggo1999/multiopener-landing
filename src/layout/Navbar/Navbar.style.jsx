import tw, { styled } from 'twin.macro';
import { Wrapper } from '~/common/Wrapper';

export const NavbarWrapper = styled(Wrapper)`
  ${tw`
    flex
    justify-between 
    py-7
  `}
`;
