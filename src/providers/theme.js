import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const themes = { dark:{ backgroundColor:'black' } };

export function ThemeProvider({ children, theme }) {
  return (
    <StyledThemeProvider theme={themes[theme]}>
      {children}
    </StyledThemeProvider>
  );
}