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
import ImageStack from "@/components/ImageStack";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    //backgroundColor: theme.palette.primary.main,
  },
  hero: {
    height: 'fit-content',
    // backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 0,
    overflow: 'hidden',
    // backgroundColor: 'rgba(255, 229, 0, 0.3)',
    // background: `linear-gradient(
    //   135deg,
    // #ffff80 0%,     /* amarillo pastel eléctrico */
    // #ffe500 40%,    /* amarillo base vibrante */
    // #ffd700 70%,    /* amarillo dorado neón */
    // #fffacd 100%    /* amarillo claro tipo luz */
    // )`,
  //   background: `linear-gradient(
  //     135deg,
  // #fffce0 0%,     /* blanco cálido (luz suave de entrada) */
  // #ffe500 35%,    /* amarillo JALO (protagonista) */
  // #ffd000 55%,    /* dorado suave (transición cálida) */
  // #ffba00 75%,    /* naranja miel ligero */
  // #fff0b3 100%    /* amarillo pastel (salida suave) */
  //   )`,
    backgroundColor: '#FFE501',
    [theme.breakpoints.up('md')]: {
      borderRadius: '16px',
    }
  },
  heroInfoSide: {
    width: '100%',
    height: '600px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      height: '75vh',
    }
  },
  heroImageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    height: '100%',
    width: '100%',
    overflowX: 'scroll',
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
    width: '250px',
    margin: '10px',
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
    borderTop: '1px solid rgba(0,0,0,0.1)',
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
            <Grid item xs={12} md={6}>
              <Box className={classes.heroInfoSide}>
                <Box sx={{ width: { xs: '90%', md: '70%' }, height: 'fit-content', textAlign: { xs: 'center', md: 'left' } }}>
                  <Stack spacing={4}>
                    <Typography variant={'h2'} style={{ fontWeight: 'bold', fontSize: '4rem' }}>
                      Todo plan inicia con <span style={{ fontFamily: 'Delius Swash Caps' }}>JALO</span>
                    </Typography>
                    <Typography sx={{ fontSize: '1.6rem', fontWeight: '500' }}>
                      Empieza a conectar con tus amigos y aventuras de la forma más fácil e inteligente. Descarga la app y organiza tus salidas ya.
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
                    <Typography variant={'h6'}>Con más de 1000 lugares, eventos y actividades que explorar</Typography>
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
