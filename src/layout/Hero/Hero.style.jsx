import tw, { styled } from 'twin.macro';
import { Wrapper } from '~/common/Wrapper';

export const HeroWrapper = styled(Wrapper)`
  ${tw`
    flex 
    grid 
    lg:grid-cols-2 
    gap-8 
    items-center
    py-10
  `}
`;

export const HeroText = styled.div`
  ${tw`
    flex 
    flex-col 
    lg:py-24 
    sm:(text-center items-center max-w-[36rem]) 
    lg:(text-left items-start max-w-full)
    mx-auto
  `}
`;

export const Title = styled.h1`
  ${tw`
    text-4xl
    sm:text-6xl 
    font-extrabold 
    mb-3
    md:mb-5
  `}

  span:nth-last-of-type(1){
    ${tw`
      text-accent 
    `}
  }
`;

export const Description = styled.p`
  ${tw`
    text-lg
    sm:text-xl 
    dark:text-white-secondary
  `}
`;

export const Buttons = styled.div`
  ${tw`
    flex 
    flex-wrap
    gap-x-5
    gap-y-3 
    md:mt-5
    mt-3 
  `}
`;

export const HeroVideo = styled.div`
  ${tw` 
    mx-auto
    w-full
    sm:w-[90%]
    lg:w-full 
  `}

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
