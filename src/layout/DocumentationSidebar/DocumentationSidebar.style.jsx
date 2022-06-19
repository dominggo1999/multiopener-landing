import tw, { styled } from 'twin.macro';

export const SidebarWrapper = styled.ul`
  ${tw`
    flex 
    flex-col
    min-w-[16rem] 
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
      text-accent
    `}
  }
`;
