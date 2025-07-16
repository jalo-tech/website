import Head from 'next/head';
import React from 'react';
import TopBar from '@/components/AppBar';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Footer from '@/components/Footer';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Hero from '@/components/Home/Hero';
import WhatIsThisSection from '@/components/Home/WhatIsThisSection';
import { useTranslation } from 'next-i18next';
import CurvedSvgIcon from '@/assets/svg/divider';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <Box>
      <Head>
        <title>{t('homeTitle')}</title>
      </Head>
      <TopBar />
      <Box component="main">
        <Toolbar variant={'regular'} />
        <Stack width={'100%'} sx={{ p: { xs: 0, md: 5 } }} spacing={10}>
          <Hero />
          <WhatIsThisSection />
        </Stack>
      </Box>
      <Box>
        <CurvedSvgIcon
          sx={{
            width: '100%',
            height: 'auto',
            display: 'block',
            lineHeight: 0,
            marginBottom: '-1px',
          }}
        />
      </Box>
      <Footer />
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'es', ['common'])),
    },
  };
};
