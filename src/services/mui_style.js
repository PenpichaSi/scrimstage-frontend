import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#4e4e4e',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ff5500',
      contrastText: '#ffffff',
    },
    lightGrey: {
      main: '#999B9D',
      contrastText: '#ffffff',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1rem',
          backgroundColor: '#404040',
        },
      },
    },
  },
})

export default theme
