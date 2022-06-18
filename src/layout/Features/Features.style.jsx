import tw, { styled } from 'twin.macro';
import { Wrapper } from '~/common/Wrapper';

export const FeaturesWrapper = styled(Wrapper)`
  ${tw`
    flex 
    flex-col
  `}
`;

export const FeatureItem = styled.div`
  ${tw`
    grid 
    pb-16
    gap-x-10
    md:(grid-cols-2)
    gap-y-5 
    items-center
  `}
`;

export const FeatureTextContent = styled.div`
  ${tw`
    flex 
    flex-col 
    max-w-2xl 
  `}
`;

export const FeatureTitle = styled.h2`
  ${tw`
    font-bold
    text-2xl
    mb-5
  `}
`;

export const FeatureDescription = styled.p`
  ${tw`
    mx-auto
    dark:text-white-secondary  
    font-light
  `}
`;
