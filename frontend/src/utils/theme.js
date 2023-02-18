import { createTheme } from '@mui/material'

export const theme = createTheme({
   // Define CSS variables
  palette: {
    primary: {
      main:"#fff",
      darker: '#0cffff',
      contrastText: '#0cff0c',
    },
    secondary: {
      main: '#ff0c86',
      light: '#ff860c',
      contrastText: '#ffff0c',
    },
  }
})
