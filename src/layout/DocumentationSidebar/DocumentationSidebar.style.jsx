import tw, { styled } from 'twin.macro';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

export const SidebarWrapper = styled.ul`
  ${tw`
    flex 
    flex-col
    min-w-[16rem] 
    mb-6
    lg:mb-0
  `}
`;

export const NavItem = styled.li`
  ${tw`
    mb-4
  `}
  
  a{
    ${tw`
      py-2
    `}
  }

  &.active a{
    ${tw`
      font-semibold
      text-accent
    `}
  }
`;

export const TriggerButton = styled(CollapsiblePrimitive.Trigger)`
  ${tw`
    lg:hidden 
    flex 
    self-start
    justify-end  
    text-sm
    px-5 
    py-2   
    font-semibold 
    rounded-lg 
    border 
    border-accent   
    bg-accent 
    dark:text-primary 
    items-center
    mb-3
  `}

  span{
    ${tw`
      ml-2
      text-lg
    `}
  }
`;

export const Collapsible = CollapsiblePrimitive.Root;
export const CollapsibleTrigger = TriggerButton;
export const CollapsibleContent = SidebarWrapper;
