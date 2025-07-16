import Box from '@mui/material/Box';
import {
  Button,
  Grid,
  Stack,
  Theme,
  Typography,
  useTheme,
} from '@mui/material';
import Download from '@mui/icons-material/Download';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Trans, useTranslation } from 'next-i18next';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useMediaQuery } from '@mui/system';

interface HeroStatProps {
  primary: string;
  secondary: string;
}

const HeroStat: React.FC<HeroStatProps> = ({ primary, secondary }) => {
  return (
    <Box sx={{ width: '350px' }}>
      <Typography variant={'h3'} sx={{ fontWeight: '500' }} gutterBottom>
        {primary}
      </Typography>
      <Typography variant={'h6'}>{secondary}</Typography>
    </Box>
  );
};

const Hero: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const { t } = useTranslation('common');

  const buttonGroup = (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 3 }}>
      <Button variant="outlined" color="secondary" startIcon={<Download />}>
        {t('heroDownloadButton')}
      </Button>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<InfoOutlinedIcon />}
      >
        {t('heroLearnMoreButton')}
      </Button>
    </Stack>
  );

  return (
    <Box className={classes.hero}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box className={classes.heroInfoSide}>
            <Box className={classes.infoContainer}>
              <Stack spacing={4}>
                <Typography
                  variant="h2"
                  style={{ fontWeight: 'bold', fontSize: '4rem' }}
                >
                  {t('heroTitle')}{' '}
                  <span style={{ fontFamily: 'Delius Swash Caps' }}>JALO</span>
                </Typography>
                <Typography sx={{ fontSize: '1.6rem', fontWeight: '600' }}>
                  {t('heroDescription')}
                </Typography>
                {isMd && buttonGroup}
              </Stack>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className={classes.heroImageContainer}>
            <Stack
              className={classes.heroImageScrollContainer}
              direction={'row'}
              spacing={2}
            >
              <img
                src={'/mockups/jalo-first-view-free-mockup.png'}
                className={classes.mockup}
              />
              <img
                src={'/mockups/jalo-second-view-mockup.png'}
                className={classes.mockup}
              />
            </Stack>
          </Box>
        </Grid>
        {!isMd && (
          <Grid item xs={12} md={6} sx={{ padding: 5 }}>
            {buttonGroup}
          </Grid>
        )}
        <Grid item xs={12}>
          <Box className={classes.heroBannerSide}>
            <Stack spacing={10} direction={{ xs: 'column', md: 'row' }}>
              <HeroStat primary={'#1'} secondary={t('heroBannerInsight1')} />
              <HeroStat primary={'+1000'} secondary={t('heroBannerInsight2')} />
              <HeroStat
                primary={t('heroBannerInsight3Title')}
                secondary={t('heroBannerInsight3')}
              />
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  hero: {
    height: 'fit-content',
    borderRadius: 0,
    overflow: 'hidden',
    backgroundColor: '#FFE501',
    [theme.breakpoints.up('md')]: {
      borderRadius: '16px',
    },
  },
  heroInfoSide: {
    width: '100%',
    height: '70vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      height: '63vh',
      marginTop: '10vh',
      paddingTop: 0,
    },
  },
  infoContainer: {
    width: '90%',
    height: 'fit-content',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      width: '75%',
    },
  },
  heroImageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    width: '100%',
    height: '500px',
    overflowX: 'scroll',
    backgroundImage: 'url(/icons-frame.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center 30px',
    [theme.breakpoints.up('md')]: {
      padding: '0 40',
      overflowX: 'auto',
      height: '600px',
    },
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
    },
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
    padding: '3em',
    width: '100%',
    height: 'fit-content',
    backgroundColor: 'rgb(255, 255, 255, 0.3)',
    backdropFilter: 'blur(10px)',
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
}));

export default Hero;
