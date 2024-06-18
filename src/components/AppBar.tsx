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
    useTheme,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Box from "@mui/material/Box";
import {useMediaQuery} from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";

const useStyles = makeStyles((theme: Theme) => ({
    appBar: {
        backgroundColor: theme.palette.primary.main,
        borderBottom: '1px solid rgba(0, 0, 0, 0.5)',
        '&:hover': {
            // backgroundColor: 'rgba(255, 255, 255, 0.3)',
        }
    },
    logo: {
        fontFamily: "Delius Swash Caps",
        fontWeight: "bold",
        fontStyle: 'normal',
        fontSize: '25px',
    },
    textInput: {
        width: '500px',
    }
}));

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function TopBar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const classes = useStyles();
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }} className={classes.logo}>
                Jalo
            </Typography>
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
        <AppBar component="nav" elevation={0} className={classes.appBar}>
            <Toolbar variant={'regular'} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { md: 'none', xs: 'block' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    className={classes.logo}
                >
                    Jalo
                </Typography>
                <Stack direction={'row'}>

                </Stack>
                <Box>
                    <TextField
                        sx={{ display: { xs: 'none', md: 'block' } }}
                        InputProps={{
                            startAdornment: <SearchIcon />,
                            className: classes.textInput,
                        }}
                        size={'small'}
                        variant={'outlined'}
                        placeholder={'Busca'}
                        name={'search'}
                    />
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    {navItems.map((item) => (
                        <Button key={item} color={'secondary'}>
                            {item}
                        </Button>
                    ))}
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