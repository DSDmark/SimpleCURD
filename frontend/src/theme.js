import { createTheme } from '@mui/material'

export const theme = createTheme({
   // Define CSS variables
  "--primary-color": "#3f51b5",
  "--secondary-color": "#f50057",
  palette: {
    primary: {
      main: 'var(--primary-color)',
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
      color:"var(--primary-color)"
    },
  },
})
