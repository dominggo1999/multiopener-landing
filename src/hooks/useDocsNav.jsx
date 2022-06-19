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

  const close = () => {
    !isBigScreen && setOpen(false);
  };

  return [open, setOpen, close];
};

export default useDocsNav;
