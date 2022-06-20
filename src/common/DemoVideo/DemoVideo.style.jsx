import tw, { styled, theme } from 'twin.macro';

export const VideoWrapper = styled.div`
  ${tw` 
    mx-auto
    w-full
    sm:w-[90%]
    lg:w-full 
  `}

  ${({ slug }) => slug && tw`
  mb-6`}

  /* Video player */
  --plyr-color-main : ${theme`colors.accent`} ;
`;
