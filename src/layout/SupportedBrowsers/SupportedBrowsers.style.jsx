import tw, { styled } from 'twin.macro';
import { Wrapper } from '~/common/Wrapper';

export const FullWidth = styled.div`
  ${tw`
    w-full 
    mb-10 
    py-10
    md:py-16
  `}
`;

export const SupportedBrowserWrapper = styled(Wrapper)`
  ${tw`
    grid 
    gap-x-10
    md:(grid-cols-2)
    gap-y-5
    items-center 
  `}
`;

export const SupportedBrowserHeader = styled.h2`
  ${tw`
    text-center
    text-3xl 
    font-bold 
    capitalize
    max-w-[32rem]
    mx-auto
    md:(text-left mx-0) 
  `}
`;

export const BrowserList = styled.div`
  ${tw`
    w-full
    grid 
    grid-cols-5
    gap-6
  `}

  img{
    ${tw`
      mx-auto
      w-[90%]
      sm:w-[80%]
    `}
  }
`;
