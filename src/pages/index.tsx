import Head from "next/head";
import React from 'react';
import TopBar from "@/components/AppBar";
import {Button, Card, CardContent, CardMedia, Grid, Stack, Theme, Typography} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Download from "@mui/icons-material/Download";
import Footer from '@/components/Footer';
import Image from "next/image";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: theme.palette.primary.main,
  },
  hero: {
    height: 'fit-content',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 0,
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {
      borderRadius: '16px 16px 0 0',
    }
  },
  heroInfoSide: {
    width: '100%',
    height: '600px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      height: '70vh',
    }
  },
  heroImageSide: {
    width: '100%',
    height: '70vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: 'url(/friends4.webp)',
  },
  heroBannerSide: {
    minHeight: '25vh',
    padding: '5vh',
    width: '100%',
    height: 'fit-content',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: '0 0 16px 16px',
    [theme.breakpoints.up('md')]: {
      padding: 5,
    },
  },
  section2Card: {
    borderRadius: '8px',
    height: '60vh',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    color: '#000',
  },
  section2CardContent: {
    padding: theme.spacing(3, 5),
  }
}));

export default function Home() {
  const classes = useStyles();
  return <Box className={classes.container}>
    <Head>
      <title>Jalo - Inicio</title>
    </Head>
    <TopBar/>
    <Box component="main">
      <Toolbar variant={'regular'}/>
      <Stack width={'100%'} sx={{ p: { xs: 0, md: 5 }}} spacing={15}>
        <Box className={classes.hero}>
          <Grid container>
            <Grid item xs={12} md={5}>
              <Box className={classes.heroInfoSide}>
                <Box sx={{ width: { xs: '90%', md: '65%' }, height: 'fit-content', textAlign: { xs: 'center', md: 'left' } }}>
                  <Stack spacing={4}>
                    <Typography variant={'h2'} style={{ fontWeight: 'bold', fontSize: '4rem' }}>
                      Todo plan inicia con <span style={{ fontFamily: 'Delius Swash Caps' }}>JALO</span>
                    </Typography>
                    <Typography sx={{ fontSize: '1.5rem', fontWeight: '500' }}>
                      Empieza a conectar con tus amigos y aventuras de la forma más fácil e inteligente. Descarga la app y organiza tus salidas ya.
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
              <Box className={classes.heroImageSide} />
            </Grid>
            <Grid item xs={12}>
              <Box className={classes.heroBannerSide}>
                <Stack spacing={10} direction={{ xs: 'column', md: 'row' }}>
                  <Box sx={{ width: '350px' }}>
                    <Typography variant={'h3'} sx={{ fontWeight: '500' }} gutterBottom>#1</Typography>
                    <Typography variant={'h6'}>Primer red social enfocada en tus aventuras</Typography>
                  </Box>
                  <Box sx={{ width: '350px' }}>
                    <Typography variant={'h3'} sx={{ fontWeight: '500' }} gutterBottom>+1000</Typography>
                    <Typography variant={'h6'}>Con más de 1000 lugares, eventos y actividades que explorar</Typography>
                  </Box>
                  <Box sx={{ width: '350px' }}>
                    <Typography variant={'h3'} sx={{ fontWeight: '500' }} gutterBottom>3 pasos</Typography>
                    <Typography variant={'h6'}>Es lo que necesitas para definir un plan con tus amigos :)</Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ height: 'fit-content' }}>
          <Box sx={{ width: '100%', height: '100%', borderRadius: { xs: 0, md: '50px' } }}>
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              <Stack sx={{ width: '90%', textAlign: 'center', pb: 6 }} spacing={6}>
                <Typography variant={'h3'} sx={{ fontWeight: 'bold', wordWrap: 'break-word' }}>
                  <span style={{ color: '#4A4A4A' }}>Olvídate de los grupos de WhatsApp</span><span style={{ fontSize: '1.1em' }}> Organiza salidas con tus amigos en 3 simples pasos.</span>
                </Typography>
                <Typography>
                  Maecenas ut lectus et dolor dictum auctor non at nibh. Donec sodales in velit sit amet fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum suscipit tincidunt.
                </Typography>
              </Stack>
              <Box sx={{ width: '90%' }}>
                <Grid container justifyContent={'center'} alignItems={'top'} spacing={8}>
                  <Grid item xs={12} md={4}>
                    <Card className={classes.section2Card} elevation={0}>
                      <CardMedia>
                        <Image src={'/friends5.webp'} sizes="100vw" alt={'friends'} style={{ width: '100%', height: 'auto' }} width={500} height={300}/>
                      </CardMedia>
                      <CardContent className={classes.section2CardContent}>
                        <Typography variant={'h4'} gutterBottom style={{ fontWeight: 500 }}>
                          Invita a tus amigos
                        </Typography>
                        <Typography>
                          Crea tu lista de invitados con la ayuda de nuestro algoritmo de sugerencias basandose en los gustos de todos tus amigos.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Card className={classes.section2Card} elevation={0}>
                      <CardMedia>
                        <Image src={'/date.webp'} sizes="100vw" alt={'friends'} style={{ width: '100%', height: 'auto' }} width={500} height={300}/>
                      </CardMedia>
                      <CardContent className={classes.section2CardContent}>
                        <Typography variant={'h4'} gutterBottom style={{ fontWeight: 500 }}>
                          Propon un lugar
                        </Typography>
                        <Typography>
                          Elige el mejor lugar para tu salida con la ayuda de nuestro algoritmo de recomendación basado en tus gustos y los de tus amigos
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Card className={classes.section2Card} elevation={0}>
                      <CardMedia>
                        <Image src={'/calendar.webp'} sizes="100vw" alt={'friends'} style={{ width: '100%', height: 'auto' }} width={500} height={300}/>
                      </CardMedia>
                      <CardContent className={classes.section2CardContent}>
                        <Typography variant={'h4'} gutterBottom style={{ fontWeight: 500 }}>
                          Define una fecha
                        </Typography>
                        <Typography>
                          Selecciona una fecha que cuadre con el calendario de todos los invitados
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
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
