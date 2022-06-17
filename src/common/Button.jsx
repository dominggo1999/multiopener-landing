import tw, { styled } from 'twin.macro';

const Btn = styled.button`
  ${tw`
    px-5 
    py-3    
    font-semibold 
    rounded-lg 
    border 
    border-accent  
  `}  
`;

Btn.Primary = styled(Btn)`
  ${tw` 
    bg-accent 
    dark:text-primary
  `}  
`;

Btn.Secondary = styled(Btn)`
  ${tw`
    border-primary
    bg-transparent 
    dark:(text-accent border-accent) 
    hover:(bg-accent text-primary border-accent)
  `}  
`;

export default Btn;
