import React, { useState } from 'react';

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    typeof value === 'boolean' && setValue(!value);
  };

  return [value, toggle];
};

export default useToggle;
