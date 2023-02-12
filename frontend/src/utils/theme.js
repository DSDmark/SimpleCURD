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
  },
  spacing: [8, 10, 12],
  typography: {
    htmlFontSize: 10,
    subtitle1: {
      fontSize:20,
      fontWeight: 400,
      color:"white"
    },
  },
})
