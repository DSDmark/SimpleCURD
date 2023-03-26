import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          textTransform: "capitalize",
        }
      }
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          justifyContent: "center",
          alignItems: "center",
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#fff",
          textDecoration: "none",
        }
      }
    }
  },
  palette: {
    primary: {
      main: "#000",
      dark: "#ff0606",
      light: "#fff",
    },
  },
});


export default theme
