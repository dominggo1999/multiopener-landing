import React from 'react';
import {
  Routes, Route, Navigate, Link,
} from 'react-router-dom';
import { useHotkeys } from '@mantine/hooks';
import useThemeStore from './store/useThemeStore';
import { AppWrapper } from './App.style';
import Home from './pages/Home/Home';
import Documentation from './pages/Documentation/Documentation';
import Navbar from './layout/Navbar/Navbar';
import Footer from './layout/Footer/Footer';

const App = () => {
  const { theme, toggleTheme } = useThemeStore();

  useHotkeys([
    ['mod+J', () => toggleTheme()],
  ]);

  return (
    <AppWrapper className={theme}>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/documentation"
          element={(
            <Navigate
              replace
              to="/documentation/use-cases"
            />
          )}
        />

        <Route
          path="/documentation/:slug"
          element={<Documentation />}
        />
      </Routes>
      <Footer />
    </AppWrapper>

  );
};

export default App;
