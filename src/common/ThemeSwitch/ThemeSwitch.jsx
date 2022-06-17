import React from 'react';
import { MdDarkMode as DarkIcon, MdOutlineLightMode as LightIcon } from 'react-icons/md';
import { Switch, SwitchThumb } from './ThemeSwitch.style';
import useThemeStore from '~/store/useThemeStore';

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useThemeStore();

  const isDark = theme === 'dark';

  return (
    <Switch
      onCheckedChange={toggleTheme}
      defaultChecked={isDark}
    >
      <SwitchThumb>
        {isDark ? <DarkIcon /> : <LightIcon />}
      </SwitchThumb>
    </Switch>
  );
};

export default ThemeSwitch;
