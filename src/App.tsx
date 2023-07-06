import React, { useState, useMemo } from 'react';
import { deepmerge } from '@mui/utils';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

const options = {
  palette: {
    primary: {
      main: "#1565c0",
      contrastText: "#ffffff",
    },
  }
}

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

  const dynamicTheme = useMemo(() => createTheme(deepmerge(options, {
    palette: {
      primary: {
        main: "#000"
      }
    }
  })), [])

  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary" onClick={() => theme == defaultTheme ? setTheme(dynamicTheme) : setTheme(defaultTheme)}>button</Button>
    </ThemeProvider>
  )
}
