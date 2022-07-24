import { AppWrapper } from '../lib/appContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#222831',
        },
        secondary: {
            main: '#00ADB5',
        },
        background: {
            menu: '#222831'
        }
    },
    typography: {
        fontFamily: [
            'Roboto',
            'Arial',
            'Helvetica',
            'sans-serif',
            'Dancing Script'
        ].join(',')
    },
    components: {
        MuiTextField: {
            defaultProps: {
                color: 'secondary',
            }
        }
    }
});

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppWrapper>
                <Component {...pageProps} />
            </AppWrapper>
        </ThemeProvider>
  )
}

export default MyApp
