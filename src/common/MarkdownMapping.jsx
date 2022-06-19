import tw, { styled } from 'twin.macro';
import { Link as RouterLink } from 'react-router-dom';
import { isValidUrl } from '~/util/isValidUrl';

export const ContentWrapper = styled.div`
  ${tw`
    w-full
    lg:max-w-[62rem]
    lg:pl-[16rem]
  `}

  h1,h2,h3,h4,h5,h6{
    ${tw`
      dark:text-accent 
      font-bold 
      mb-5
    `}
  }

  p{
    ${tw`
      mb-5
      dark:text-white-secondary
    `}
  }

  a{
    ${tw`
      underline
      font-semibold
      dark:(text-accent font-normal)
    `}
  }

  ul{
    ${tw`
      list-disc 
    `}
  }

  ol{
    ${tw`
      list-decimal
    `}
  }

  ul, ol{
    ${tw`
      dark:text-white-secondary
      mb-5
    `}

    li{
      ${tw`
        ml-5
      `}
    }
  }
  
  strong{
    ${tw`
      text-black
      dark:text-white 
    `}
  }
`;

export const Heading1 = styled.h1`
  ${tw`
    text-3xl
  `}
`;

export const Heading2 = styled.h2`
  ${tw`
    text-2xl
  `}
`;

export const Heading3 = styled.h3`
  ${tw`
    text-xl
  `}
`;

export const Link = ({ href, children }) => {
  if (isValidUrl(href)) {
    return (
      <a
        target="_blank"
        href={href}
        rel="noreferrer noopener"
      >
        {children}
      </a>
    );
  }

  return (
    <RouterLink to={href}>
      {children}
    </RouterLink>
  );
};

const ImageStyles = styled.figure`
  ${tw`
    mb-8
  `}

  p{
    ${tw`
      text-center
      text-sm
    `} 
  }

  a{
    ${tw`
      underline
      dark:text-accent
    `}
  }
`;

export const Image = ({ src, alt, children }) => {
  return (
    <ImageStyles>
      <img
        alt={alt}
        src={src}
        tw="w-full mb-2"
      />
      {
        children && children
      }
    </ImageStyles>
  );
};
