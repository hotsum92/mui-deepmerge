import React, { useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#1565c0",
      contrastText: "#ffffff",
    },
  }
});

export const App: React.VFC = () => {

  const [theme, setTheme] = useState(defaultTheme)

  const dynamicTheme = useMemo(() => createTheme({
    palette: {
      primary: {
        main: "#000"
      }
    }
  }), [])

  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary" onClick={() => theme == defaultTheme ? setTheme(dynamicTheme) : setTheme(defaultTheme)}>button</Button>
    </ThemeProvider>
  )
}
