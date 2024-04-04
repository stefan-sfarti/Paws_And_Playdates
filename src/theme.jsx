import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1abc9c',
            light: '#6fe6d1',
            dark: '#13866f',
        },
        secondary: {
            main: '#3498db',
            light: '#8bc4e8',
            dark: '#2073a8',
        },
        background: {
            default: '#f5f5f5',
            paper: '#ffffff',
        },
        text: {
            primary: '#2c3e50',
            secondary: '#95a5a6',
        },
    },
    typography: {
        fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: 'none',
                    },
                },
            },
            variants: [
                {
                    props: { variant: 'contained', color: 'primary' },
                    style: {
                        backgroundColor: '#1abc9c',
                        color: '#ffffff',
                        '&:hover': {
                            backgroundColor: '#13866f',
                        },
                    },
                },
                {
                    props: { variant: 'contained', color: 'secondary' },
                    style: {
                        backgroundColor: '#3498db',
                        color: '#ffffff',
                        '&:hover': {
                            backgroundColor: '#2073a8',
                        },
                    },
                },
                {
                    props: { variant: 'outlined', color: 'primary' },
                    style: {
                        color: '#1abc9c',
                        borderColor: '#1abc9c',
                        '&:hover': {
                            borderColor: '#13866f',
                            backgroundColor: 'rgba(26, 188, 156, 0.08)',
                        },
                    },
                },
                {
                    props: { variant: 'outlined', color: 'secondary' },
                    style: {
                        color: '#3498db',
                        borderColor: '#3498db',
                        '&:hover': {
                            borderColor: '#2073a8',
                            backgroundColor: 'rgba(52, 152, 219, 0.08)',
                        },
                    },
                },
            ],
        },
    },
});

export default theme;