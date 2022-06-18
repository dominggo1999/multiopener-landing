import tw, { styled } from 'twin.macro';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { keyframes } from 'styled-components';

const overlayShow = keyframes`
  0%{
    opacity: 0;
  }

  100%{
    opacity: 0.6;
  }
`;

export const StyledOverlay = styled(DialogPrimitive.Overlay)`
  ${tw`
    fixed 
    inset-0 
    opacity-[60%]
    bg-black
  `}

`;

export const Message = styled.div`
  ${tw`
    fixed 
    bg-white 
    top-1/2 
    left-1/2
    -translate-x-1/2 
    -translate-y-1/2 
    w-72 
    rounded 
    p-6 
    z-[9999]
  `}

  &.dark{
    ${tw`
      bg-primary 
    `}

    p{
      ${tw`
        text-white-secondary
      `}
    }

    a{
      ${tw`
        text-accent
      `}
    }
  }

  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;

  p{
    ${tw`
      text-primary
      mt-5
    `}
  }

  a{
    ${tw`
      underline 
      font-bold
    `}
  }
`;

export const StyledTitle = styled(DialogPrimitive.Title)`
  ${tw`
    text-primary
    text-xl  
    font-semibold 
    bg-accent 
    inline 
    px-6 
    py-1
    rounded-full 
  `}
`;

export const Buttons = styled.div`
  ${tw`
    flex 
    justify-end
    mt-6
    text-primary 
    gap-x-5
  `}
`;

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogContent = DialogPrimitive.Content;
export const MessageTitle = StyledTitle;
export const DialogPortal = DialogPrimitive.Portal;
export const DialogOverlay = StyledOverlay;
export const DialogDescription = DialogPrimitive.Description;
export const DialogClose = DialogPrimitive.Close;
