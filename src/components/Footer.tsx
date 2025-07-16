import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { Divider, IconButton, Stack, Theme, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Toolbar from '@mui/material/Toolbar';
import YouTube from '@mui/icons-material/YouTube';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import Facebook from '@mui/icons-material/Facebook';
import CurvedDivider from '@/assets/svg/divider';
import React from 'react';
import LogoTypographySVG from '@/assets/svg/logo_typography.svg';
import { Face } from '@mui/icons-material';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: '100%',
    backgroundColor: '#000',
    height: 'fit-content',
    color: '#999 !Important',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container} px={{ xs: 4, sm: 10 }} pt={5}>
      <Box>
        <Stack
          spacing={3}
          alignItems={'center'}
          justifyContent={'center'}
          width={'100%'}
        >
          <LogoTypographySVG />
          <Stack spacing={1} direction={'row'}>
            <IconButton color={'inherit'}>
              <Instagram />
            </IconButton>
            <IconButton color={'inherit'}>
              <Facebook />
            </IconButton>
            <IconButton color={'inherit'}>
              <Twitter />
            </IconButton>
            <IconButton color={'inherit'}>
              <YouTube />
            </IconButton>
          </Stack>
          <Typography variant={'subtitle1'} sx={{ textAlign: 'center' }}>
            Made with 💛 by the Jalo Tech team at Mexico City 🇲🇽
          </Typography>
        </Stack>
      </Box>
      <Box py={5}>
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
      </Box>
      <Box pb={4} display={'flex'}>
        <Typography sx={{ flexGrow: 1, fontWeight: '500' }}>
          Jalo Tech S.A.S © 2025
        </Typography>
        <Typography>Aviso legal</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
