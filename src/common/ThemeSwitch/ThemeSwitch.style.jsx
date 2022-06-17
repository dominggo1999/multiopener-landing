import tw, { styled } from 'twin.macro';
import * as SwitchPrimitive from '@radix-ui/react-switch';

export const Switch = styled(SwitchPrimitive.Root)`
  ${tw`
    w-[56px] 
    h-[32px]
    bg-primary 
    relative 
    rounded-full 
    flex 
    items-center 
    dark:bg-accent
  `}
`;

export const SwitchThumb = styled(SwitchPrimitive.SwitchThumb)`
  ${tw`
    rounded-full 
    w-[27px]
    bg-blue-500 
    block 
    absolute 
    translate-x-[4px] 
    flex 
    items-center 
    justify-center
    text-primary 
    bg-white
    dark:(translate-x-[24px])
  `}

  aspect-ratio: 1/1;
  transition: transform 200ms ease-in-out;
`;
