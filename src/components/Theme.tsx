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
            main: '#111', // Gray
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
                    padding: '8px',
                    paddingLeft: '18px',
                    paddingRight: '18px',
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
                    color: '#000',
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            // border: '2px solid rgba(255, 255, 255, 0.5)',
                            borderRadius: '50px',
                            border: '1px solid rgba(0, 0, 0, 0.5)',
                            opacity: '50',
                        },
                        '&:hover fieldset': {
                            borderColor: 'rgba(0, 0, 0, 0.5)', // Color del borde al pasar el ratón por encima
                            opacity: '70',
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