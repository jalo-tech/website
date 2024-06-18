'use client';

import Head from "next/head";
import React from 'react';
import TopBar from "@/components/AppBar";
import {Button, Grid, Stack, Theme, Typography} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Download from "@mui/icons-material/Download";
import Footer from '@/components/Footer';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: theme.palette.primary.main,
  }
}));

export default function Home() {
  const classes = useStyles();
  return <Box className={classes.container}>
    <Head>
      <title>Jalo | Inicio</title>
    </Head>
    <TopBar/>
    <Box component="main">
      <Toolbar variant={'regular'}/>
      <Box width={'100%'} sx={{ padding: { xs: 0, md: 5 } }}>
        <Box sx={{ height: 'fit-content', marginBottom: 10, backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: { xs: 0, md: '16px' }, overflow: 'hidden' }}>
          <Grid container>
            <Grid item xs={12} md={5}>
              <Box sx={{ width: '100%', height: { xs: '700px', md: '700px' }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ width: { xs: '90%', md: '60%' }, height: 'fit-content', textAlign: { xs: 'center', md: 'left' } }}>
                  <Stack spacing={4}>
                    <Typography variant={'h2'} sx={{ fontWeight: 'bold' }}>
                      Todo plan inicia con <span style={{ fontFamily: 'Delius Swash Caps' }}>JALO</span>
                    </Typography>
                    <Typography sx={{ fontSize: '1.5rem', color: 'textSecondary' }}>
                      Empieza a conectar con tus amigos y tus aventuras de una forma más inteligente y fácil, descarga la app y organiza tus salidas con recomendaciones generadas por IA.
                    </Typography>
                    <Box>
                      <Button variant={'contained'} color={'secondary'} startIcon={<Download />}>
                        Descarga la App
                      </Button>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box sx={{
                backgroundImage: 'url(/friends3.jpg)',
                width: '100%',
                height: '700px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ height: '100vh' }}>
          <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', width: '100%', height: '100%', borderRadius: { xs: 0, md: '50px' } }}>

          </Box>
        </Box>
      </Box>
    </Box>
    <Footer />
  </Box>
}
