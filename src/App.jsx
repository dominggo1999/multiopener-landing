import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useHotkeys } from '@mantine/hooks';
import useThemeStore from './store/useThemeStore';
import { AppWrapper, AppGlobalStyles } from './App.style';

const App = () => {
  const { theme, toggleTheme } = useThemeStore();

  useHotkeys([
    ['mod+J', () => toggleTheme()],
  ]);

  return (
    <AppWrapper className={theme}>
      <AppGlobalStyles theme={theme} />
      <Routes>
        <Route
          path="/"
          element={<p>Home</p>}
        />
        <Route
          path="/documentation"
          element={<p>Documentation</p>}
        />
      </Routes>
    </AppWrapper>

  );
};

export default App;
