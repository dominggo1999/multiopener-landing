import React, { useLayoutEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { theme } from 'twin.macro';

const useDocsNav = () => {
  const [open, setOpen] = React.useState(true);

  const isBigScreen = useMediaQuery(
    {
      query: `(min-width: ${theme`screens.lg`})`,
    },
  );

  useLayoutEffect(() => {
    isBigScreen ? setOpen(true) : setOpen(false);
  }, [isBigScreen]);

  return [open, setOpen];
};

export default useDocsNav;
