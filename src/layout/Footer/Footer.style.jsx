import tw, { styled } from 'twin.macro';
import { Wrapper } from '~/common/Wrapper';

export const FooterWrapper = styled(Wrapper)`
  ${tw`
    grid
    grid-cols-1
    lg:grid-cols-2
    gap-y-8 
    mt-auto
  `}
`;
export const Copyright = styled.div`
  ${tw` 
    w-full 
    col-span-1 
    md:col-span-2 
    flex 
    flex-col
    sm:flex-row
    justify-between
    items-center
    pb-12
  `}
`;

export const CopyrightText = styled.p`
  ${tw`
    dark:text-white
  `}
    
  a{
    ${tw`
      dark:text-accent 
      font-semibold 
      underline 
    `}
  }
`;
