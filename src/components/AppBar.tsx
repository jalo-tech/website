import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {makeStyles} from "@mui/styles";
import {
    Button, Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText, Stack, TextField,
    Theme,
    Typography,
    useScrollTrigger,
    useTheme,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Box from "@mui/material/Box";
import {useMediaQuery} from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import Download from "@mui/icons-material/Download";
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) => ({
    appBar: {
        backgroundColor: 'white',
        //borderBottom: '1px solid rgba(0, 0, 0, 0.5)',
        color: '#000',
        '&:hover': {
            // backgroundColor: 'rgba(255, 255, 255, 0.3)',
        }
    },
    appBarActive: {
        // backgroundColor: '#111',
        // color: '#fff',
        boxShadow: 'rgba(0, 0, 0, 0.06) 0px 2px 5px 0px',
    },
    logo: {
        width: '50px',
        height: '50px',
        backgroundColor: 'rgb(251, 230, 77)',
        borderRadius: '50%',
        border: '1px solid #555',
        display: 'grid',
        placeItems: 'center',
    },
    logoTitle: {
        fontFamily: "Delius Swash Caps",
        fontWeight: "bold",
        fontStyle: 'normal',
        fontSize: '18px',
    },
    textInput: {
        width: '35vw',
        color: '#000',
        '& fieldset': {
            border: '1px solid rgba(0, 0, 0, 0.4)',
            borderRadius: '50px'
        },
    },
    textInputRoot: {
    }
}));

const drawerWidth = 240;
const navItems = ['Inicio', 'Acerca de', 'Contacto'];

interface ElevationScrollProps {
    window?: () => Window;
}

function TopBar({ window }: ElevationScrollProps) {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const classes = useStyles();
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    const trigger = useScrollTrigger({ 
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            {/* <Typography variant="h6" sx={{ my: 2 }} className={classes.logo}>
                Jalo
            </Typography> */}
            <img src={'/logo.svg'} className={classes.logo} />
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return <>
        <AppBar component="nav" elevation={trigger ? 4 : 0} className={clsx(classes.appBar, {
            [classes.appBarActive]: trigger,
        })}>
            <Toolbar variant={'regular'} sx={{ display: 'flex', justifyContent: 'space-between', margin: { md: '0 100px', sm: '0' }, height: '80px' }}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { md: 'none', xs: 'block' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Box className={classes.logo}>
                    <Typography
                        variant="h6"
                        className={classes.logoTitle}
                    >
                        Jalo
                    </Typography>
                </Box>
                <Box>
                    <TextField
                        sx={{ display: { xs: 'none', md: 'block' } }}
                        InputProps={{
                            startAdornment: <Box sx={{ width: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '10px' }}><SearchIcon /></Box>,
                            className: classes.textInput,
                            classes: {
                                root: classes.textInputRoot,
                            }
                        }}
                        size={'small'}
                        variant={'outlined'}
                        placeholder={'Busca'}
                        name={'search'}
                    />
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    {navItems.map((item) => (
                        <Button key={item} color={'inherit'} sx={{ marginRight: '10px' }}>
                            {item}
                        </Button>
                    ))}
                    <Button variant={'contained'} color={'primary'} startIcon={<Download />} size='small'>
                        Descargar
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
        <nav>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
        </nav>
    </>;
}
export default TopBar;