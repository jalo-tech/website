import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { makeStyles } from '@mui/styles';
import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  Theme,
  Typography,
  useScrollTrigger,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import Download from '@mui/icons-material/Download';
import clsx from 'clsx';
import CloseIcon from '@mui/icons-material/Close';
import CancelIcon from '@mui/icons-material/Cancel';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import LogoSVG from '@/assets/svg/logo.svg';

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    backgroundColor: 'white',
    //borderBottom: '1px solid rgba(0, 0, 0, 0.5)',
    color: '#000',
    '&:hover': {
      // backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
  },
  appBarActive: {
    // backgroundColor: '#111',
    // color: '#fff',
    boxShadow: 'rgba(0, 0, 0, 0.06) 0px 2px 5px 0px',
  },
  textInput: {
    width: '35vw',
    color: '#000',
    fontWeight: 'bold',
    '& fieldset': {
      border: '1px solid rgba(0, 0, 0, 0.4)',
      borderRadius: '50px',
    },
  },
  textInputRoot: {},
  logoContainer: {},
  listItem: {
    height: '15vh',
  },
}));

const drawerWidth = '100%';
// Inicio, Acerca de, Contacto
const navItems = [
  'appBarOptionHome',
  'appBarOptionAbout',
  'appBarOptionContact',
];

interface ElevationScrollProps {
  window?: () => Window;
}

function TopBar({ window }: ElevationScrollProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useTranslation();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const [searchText, setSearchText] = useState('');

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const clearText = () => {
    setSearchText('');
  };

  const drawer = (
    <Box
      sx={{
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <IconButton
          size={'large'}
          onClick={handleDrawerToggle}
          sx={{ marginTop: 3, marginRight: 3 }}
        >
          <CloseIcon fontSize={'large'} />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              className={classes.listItem}
            >
              <ListItemText
                primary={t(item)}
                primaryTypographyProps={{
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        component="nav"
        elevation={trigger ? 4 : 0}
        className={clsx(classes.appBar, {
          [classes.appBarActive]: trigger,
        })}
      >
        <Toolbar
          variant={'regular'}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: { sm: '0 70px', xs: '0' },
            height: { sm: '80px', xs: '50px' },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none', xs: 'block' } }}
          >
            <MenuIcon fontSize={'large'} />
          </IconButton>
          {isMd && <LogoSVG />}
          <Box>
            <TextField
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              sx={{ display: { xs: 'none', md: 'block' } }}
              InputProps={{
                startAdornment: !searchText && (
                  <Box
                    sx={{
                      width: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '10px',
                    }}
                  >
                    <IconButton size={'small'}>
                      <SearchIcon fontSize={'small'} />
                    </IconButton>
                  </Box>
                ),
                endAdornment: searchText && (
                  <IconButton size={'small'} onClick={clearText}>
                    <CancelIcon fontSize={'small'} />
                  </IconButton>
                ),
                className: classes.textInput,
                classes: {
                  root: classes.textInputRoot,
                },
              }}
              size={'small'}
              variant={'outlined'}
              placeholder={t('appBarSearch')}
              name={'search'}
            />
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} color={'inherit'} sx={{ marginRight: '10px' }}>
                {t(item)}
              </Button>
            ))}
            <LanguageSwitcher />
            <Button
              variant={'contained'}
              color={'primary'}
              startIcon={<Download />}
              size="small"
            >
              {t('appBarDownload')}
            </Button>
          </Box>
          {!isMd && <LanguageSwitcher />}
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
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}
export default TopBar;
