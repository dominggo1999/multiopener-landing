import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useHotkeys } from '@mantine/hooks';
import useThemeStore from './store/useThemeStore';
import { AppWrapper, AppGlobalStyles } from './App.style';
import Home from './pages/Home/Home';
import Documentation from './pages/Documentation/Documentation';
import Navbar from './layout/Navbar/Navbar';

const App = () => {
  const { theme, toggleTheme } = useThemeStore();

  useHotkeys([
    ['mod+J', () => toggleTheme()],
  ]);

  return (
    <AppWrapper className={theme}>
      <AppGlobalStyles theme={theme} />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/documentation"
          element={
            <Navigate to="/documentation/get-started" />
          }
        />

        <Route
          path="/documentation/:slug"
          element={<Documentation />}
        />
      </Routes>
    </AppWrapper>

  );
};

export default App;
