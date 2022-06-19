import tw, { styled } from 'twin.macro';

export const VideoWrapper = styled.div`
  ${tw` 
    mx-auto
    w-full
    sm:w-[90%]
    lg:w-full 
  `}

  ${({ slug }) => slug && tw`
  mb-6`}

  /* Background */
  & > .video-react {
    ${tw`
      bg-white
      dark:bg-primary
    `}
  }

  /* Play button */
  .video-react-button.video-react-big-play-button{
    ${tw`
      opacity-90
      hover:(opacity-100 scale-[1.15])
      -translate-x-1/2 
      -translate-y-1/2 
      top-1/2 
      left-1/2 
      rounded-full 
      bg-accent 
      w-[70px]
      h-[70px]
      border-none
    `}

    transition: transform ease-in-out 180ms;

    &::before{
      ${tw`
        hidden
      `}
    }

    &::after {
      ${tw`
        absolute 
        -translate-x-1/2 
        -translate-y-1/2 
        left-1/2 
        top-[57%]
      `}
      content : url("/icons/video-play-button.svg");
    }
  }
`;
