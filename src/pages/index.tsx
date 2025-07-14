import Head from "next/head";
import React, { useState, useEffect } from 'react';
import TopBar from "@/components/AppBar";
import {Button, Card, CardContent, CardMedia, Grid, Stack, Theme, Typography} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Download from "@mui/icons-material/Download";
import Footer from '@/components/Footer';
import Image from "next/image";
import ImageStack from "@/components/ImageStack";
import {useTranslation} from "next-i18next";
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ParallaxIcons from "@/components/ParallaxIcons";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
  },
  hero: {
    height: 'fit-content',
    borderRadius: 0,
    overflow: 'hidden',
    backgroundColor: '#FFE501',
    [theme.breakpoints.up('md')]: {
      borderRadius: '16px',
    }
  },
  heroInfoSide: {
    width: '100%',
    height: '70vh',
    marginTop: '10vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      height: '63vh',
      paddingTop: 0,
    }
  },
  heroImageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    width: '100%',
    height: '100%',
    overflowX: 'scroll',
    backgroundImage: 'url(/icons-frame.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center 30px',
    [theme.breakpoints.up('md')]: {
      padding: '0 40',
    }
  },
  heroImageScrollContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 'calc(50vw + 75px)',
    [theme.breakpoints.up('md')]: {
      marginLeft: 0,
    },
  },
  mockup: {
    width: '230px',
    margin: '10px',
    [theme.breakpoints.up('md')]: {
      width: '15vw',
    }
  },
  heroImageSide: {
    width: '100%',
    height: '70vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: 'url(/friends4.webp)',
    borderRadius: '16px',
  },
  heroBannerSide: {
    minHeight: '25vh',
    padding: '5vh',
    width: '100%',
    height: 'fit-content',
    backgroundColor: 'rgb(255, 255, 255, 0.3)',
    backdropFilter: 'blur(10px)',
    // borderTop: '1px solid rgba(0,0,0,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 0,
    [theme.breakpoints.up('md')]: {
      padding: 5,
      borderRadius: '0 0 16px 16px',
    },
  },
  section2Card: {
    borderRadius: '8px',
    height: '80vh',
    color: '#000',
  },
  section2CardContent: {
    padding: theme.spacing(3, 5),
    textAlign: 'center',
  }
}));

const steps = [
  {
    number: 1,
    title: 'Invita a tus amigos',
    description:
        'Crea tu lista de invitados con la ayuda de nuestro algoritmo de sugerencias basándose en los gustos de todos tus amigos.',
  },
  {
    number: 2,
    title: 'Propón un lugar',
    description:
        'Elige el mejor lugar para tu salida con la ayuda de nuestro algoritmo de recomendación basado en tus gustos y los de tus amigos.',
  },
  {
    number: 3,
    title: 'Define una fecha',
    description:
        'Selecciona una fecha que cuadre con el calendario de todos los invitados.',
  },
];

export default function Home() {
  const classes = useStyles();
  const { t } = useTranslation('common');

  return <Box className={classes.container}>
    <Head>
      <title>Jalo - Inicio</title>
    </Head>
    <TopBar/>
    <Box component="main">
      <Toolbar variant={'regular'}/>
      <Stack width={'100%'} sx={{ p: { xs: 0, md: 5 }}} spacing={10}>
        <Box className={classes.hero}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Box className={classes.heroInfoSide}>
                <Box sx={{ width: { xs: '90%', md: '75%' }, height: 'fit-content', textAlign: { xs: 'center', md: 'left' } }}>
                  <Stack spacing={4}>
                    <Typography variant={'h2'} style={{ fontWeight: 'bold', fontSize: '4rem' }}>
                      {t('heroTitle')} <span style={{ fontFamily: 'Delius Swash Caps' }}>JALO</span>
                    </Typography>
                    <Typography sx={{ fontSize: '1.6rem', fontWeight: '600' }}>
                      {t('heroDescription')}
                    </Typography>
                    <Box>
                      <Button variant={'outlined'} color={'secondary'} startIcon={<Download />}>
                        Descarga la App
                      </Button>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className={classes.heroImageContainer}>
                {/* <Box className={classes.heroImageSide} /> */}
                {/*<ImageStack />*/}
                <Box className={classes.heroImageScrollContainer}>
                  <img src={'/mockups/jalo-first-view-free-mockup.png'} className={classes.mockup}/>
                  <img src={'/mockups/jalo-second-view-mockup.png'} className={classes.mockup}/>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className={classes.heroBannerSide}>
                <Stack spacing={10} direction={{ xs: 'column', md: 'row' }}>
                  <Box sx={{ width: '350px' }}>
                    <Typography variant={'h3'} sx={{ fontWeight: '500' }} gutterBottom>#1</Typography>
                    <Typography variant={'h6'}>Primer red social mexicana enfocada en tus aventuras</Typography>
                  </Box>
                  <Box sx={{ width: '350px' }}>
                    <Typography variant={'h3'} sx={{ fontWeight: '500' }} gutterBottom>+1000</Typography>
                    <Typography variant={'h6'}>Cuenta con más de 1000 lugares, eventos y actividades que explorar</Typography>
                  </Box>
                  <Box sx={{ width: '350px' }}>
                    <Typography variant={'h3'} sx={{ fontWeight: '500' }} gutterBottom>3 pasos</Typography>
                    <Typography variant={'h6'}>Es lo único que necesitas para definir un plan con tus amigos :)</Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/*<ParallaxIcons />*/}
        <Box sx={{ height: 'fit-content' }}>
          <Box sx={{ width: '100%', height: '100%', borderRadius: { xs: 0, md: '50px' } }}>
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              {/*<Stack sx={{ width: '90%', textAlign: 'center', pb: 6 }} spacing={6}>*/}
              {/*  <Typography variant={'h3'} sx={{ fontWeight: 'bold', wordWrap: 'break-word' }}>*/}
              {/*    <span style={{ color: '#4A4A4A' }}>Olvídate de los grupos de WhatsApp</span><span style={{ fontSize: '1.1em' }}> Organiza salidas con tus amigos en 3 simples pasos.</span>*/}
              {/*  </Typography>*/}
              {/*  <Typography sx={{ fontSize: '18px', fontWeight: '500' }}>*/}
              {/*    Coordinar salidas nunca fue tan fácil. Con JALO, hacer planes con tus amigos es rápido, organizado y sin estrés.*/}
              {/*  </Typography>*/}
              {/*</Stack>*/}
              <Box sx={{ width: '85%', marginBottom: 15, marginTop: 10 }}>
                <Grid container justifyContent={'center'} alignItems={'top'} spacing={5}>
                  <Grid item xs={12} md={6}>
                    <Stack sx={{ width: '90%', pb: 6 }} spacing={6}>
                      <Typography variant={'h3'} sx={{ fontWeight: 'bold', wordWrap: 'break-word' }}>
                        <span style={{ color: '#4A4A4A', fontSize: '0.9em' }}>Olvídate de los grupos de WhatsApp</span><span style={{ fontSize: '1em' }}> Organiza salidas con tus amigos en 3 simples pasos.</span>
                      </Typography>
                      {/*<Typography sx={{ fontSize: '18px', fontWeight: '500' }}>*/}
                      {/*  Coordinar salidas nunca fue tan fácil. Con JALO, hacer planes con tus amigos es rápido, organizado y sin estrés.*/}
                      {/*</Typography>*/}
                    </Stack>
                    <Stack spacing={4}>
                      {steps.map((step) => (
                          <Box key={step.number} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                            {/* Número circular */}
                            <Box
                                sx={{
                                  width: 48,
                                  height: 48,
                                  borderRadius: '50%',
                                  backgroundColor: 'black',
                                  color: 'white',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontWeight: 'bold',
                                  fontSize: '1.25rem',
                                  flexShrink: 0,
                                  mr: 2,
                                }}
                            >
                              {step.number}
                            </Box>

                            {/* Texto */}
                            <Box>
                              <Typography variant="h6" fontWeight="bold">
                                {step.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {step.description}
                              </Typography>
                            </Box>
                          </Box>
                      ))}
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>
                      <ImageStack />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              {/*<Box sx={{ width: '85%' }}>*/}
              {/*  <Grid container justifyContent={'center'} alignItems={'top'} spacing={6}>*/}
              {/*    <Grid item xs={12} md={4}>*/}
              {/*      <Card className={classes.section2Card} elevation={0}>*/}
              {/*        <CardMedia sx={{ margin: 3, marginBottom: 1, display: 'grid', placeItems: 'center' }}>*/}
              {/*          <Image src={'/friends5.webp'} alt={'friends'} style={{ width: '100%', height: 'auto', borderRadius: '50%' }} width={300} height={300}/>*/}
              {/*        </CardMedia>*/}
              {/*        <CardContent className={classes.section2CardContent}>*/}
              {/*          <Typography variant={'h4'} gutterBottom style={{ fontWeight: 500 }}>*/}
              {/*            Invita a tus amigos*/}
              {/*          </Typography>*/}
              {/*          <Typography>*/}
              {/*            Crea tu lista de invitados con la ayuda de nuestro algoritmo de sugerencias basandose en los gustos de todos tus amigos.*/}
              {/*          </Typography>*/}
              {/*        </CardContent>*/}
              {/*      </Card>*/}
              {/*    </Grid>*/}
              {/*    <Grid item xs={12} md={4}>*/}
              {/*      <Card className={classes.section2Card} elevation={0}>*/}
              {/*        <CardMedia sx={{ margin: 3, marginBottom: 1, display: 'grid', placeItems: 'center' }}>*/}
              {/*          <Image src={'/date.webp'} alt={'friends'} style={{ width: '100%', height: 'auto', borderRadius: '50%' }} width={300} height={300}/>*/}
              {/*        </CardMedia>*/}
              {/*        <CardContent className={classes.section2CardContent}>*/}
              {/*          <Typography variant={'h4'} gutterBottom style={{ fontWeight: 500 }}>*/}
              {/*            Propon un lugar*/}
              {/*          </Typography>*/}
              {/*          <Typography>*/}
              {/*            Elige el mejor lugar para tu salida con la ayuda de nuestro algoritmo de recomendación basado en tus gustos y los de tus amigos*/}
              {/*          </Typography>*/}
              {/*        </CardContent>*/}
              {/*      </Card>*/}
              {/*    </Grid>*/}
              {/*    <Grid item xs={12} md={4}>*/}
              {/*      <Card className={classes.section2Card} elevation={0}>*/}
              {/*        <CardMedia sx={{ margin: 3, marginBottom: 1, display: 'grid', placeItems: 'center' }}>*/}
              {/*          <Image src={'/calendar.webp'} alt={'friends'} style={{ width: '100%', height: 'auto', borderRadius: '50%' }} width={300} height={300}/>*/}
              {/*        </CardMedia>*/}
              {/*        <CardContent className={classes.section2CardContent}>*/}
              {/*          <Typography variant={'h4'} gutterBottom style={{ fontWeight: 500 }}>*/}
              {/*            Define una fecha*/}
              {/*          </Typography>*/}
              {/*          <Typography>*/}
              {/*            Selecciona una fecha que cuadre con el calendario de todos los invitados*/}
              {/*          </Typography>*/}
              {/*        </CardContent>*/}
              {/*      </Card>*/}
              {/*    </Grid>*/}
              {/*  </Grid>*/}
              {/*</Box>*/}
            </Box>
          </Box>
        </Box>
        {/*<Box sx={{ height: '100vh', backgroundColor: '#000', p: 10 }}>*/}
        {/*  <Grid container spacing={2}>*/}
        {/*    <Grid item xs={12} md={6}>*/}
        {/*      <video width="100%" controls preload="none">*/}
        {/*        <source src="/master.mp4" type="video/mp4"/>*/}
        {/*        Your browser does not support the video tag.*/}
        {/*      </video>*/}
        {/*    </Grid>*/}
        {/*    <Grid item xs={12} md={6}>*/}
        {/*      hola*/}
        {/*    </Grid>*/}
        {/*  </Grid>*/}
        {/*</Box>*/}
      </Stack>
    </Box>
    <Footer/>
  </Box>
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'es', ['common'])),
    },
  };
};