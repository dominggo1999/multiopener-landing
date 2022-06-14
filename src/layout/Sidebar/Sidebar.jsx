import React from 'react';
import useToggle from '~/hooks/useToggle';

const Sidebar = () => {
  const [showSidebar, toggleSidebar] = useToggle();

  return (
    <div>Sidebar</div>
  );
};

export default Sidebar;
