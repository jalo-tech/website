import {createTheme} from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: ['Inter'].join(','),
    },
    palette: {
        primary: {
            main: '#FFE500', // Yellow
        },
        secondary: {
            main: '#4A4A4A', // Gray
        },
        success: {
            main: '#388e3c', // Green
        },
        error: {
            main: '#d32f2f', // Red
        },
        background: {
            default: '#FFFFFF', // White
        },
        text: {
            primary: '#000000', // Black
        },
    },
    components: {
        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: '#fff'
                }
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#fff',
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    height: '50px',
                }
            }
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: ({ ownerState }) => ({
                    textTransform: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    borderRadius: '50px',
                    minWidth: '100px',
                    padding: '10px 30px',
                    ...(ownerState.variant === 'contained' &&
                        ownerState.color === 'secondary' && {
                            color: '#fff',
                        }),
                }),
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderRadius: '50px'
                        },
                        '&:hover fieldset': {
                            borderColor: 'rgba(0, 0, 0, 0.5)', // Color del borde al pasar el ratón por encima
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'rgba(0, 0, 0, 0.7)', // Color del borde cuando el TextField está enfocado
                        },
                    },
                },
            },
        },
    },
});

export default theme;