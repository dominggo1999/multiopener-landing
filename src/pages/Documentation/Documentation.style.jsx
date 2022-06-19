import tw, { styled } from 'twin.macro';
import { Wrapper } from '~/common/Wrapper';

export const DocumentationWrapper = styled(Wrapper)`
  ${tw`
    flex 
    flex-col
    lg:flex-row
    gap-x-10 
  `}
`;
