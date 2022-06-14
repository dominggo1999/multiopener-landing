import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useHotkeys } from '@mantine/hooks';
import useThemeStore from './store/useThemeStore';
import { AppWrapper, AppGlobalStyles } from './App.style';
import Home from './pages/Home/Home';
import Documentation from './pages/Documentation/Documentation';

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
          element={<Documentation />}
        />
      </Routes>
    </AppWrapper>

  );
};

export default App;
