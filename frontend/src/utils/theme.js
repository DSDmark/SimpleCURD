
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          textTransform: "capitalize",
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
