'use client';

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import React, { RefObject, useRef } from 'react'; 
import TopBar from "@/components/AppBar";
import {Stack, Typography} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

const inter = Inter({ subsets: ["latin"] });

type HeroProps = {
  showParallax: boolean
}

const Hero = ({ showParallax }: HeroProps) => {
  return <div style={{ position: 'relative', overflow: 'hidden' }}>
    <ParallaxProvider>
      <div className={styles.floatingDiv}>
        <Parallax speed={-500} endScroll={5}>
          <div>
            <img src="/logo.svg" alt="logo" style={{ width: '240px' }} />
            <h3>Every plan starts with Jalo</h3>
          </div>
        </Parallax>
      </div>
      {
        showParallax && <div className={styles.Hero} style={{height: '150vh', position: 'relative'}}>
          <Parallax speed={-30}>
            <img src="/screenshot1.png" alt="Screenshot 1" style={{
              width: '200px',
              position: 'absolute',
              left: '5%',
              top: 'calc(0px)',
              transform: 'translateY(-30%)'
            }}/>
          </Parallax>
          <Parallax speed={-15}>
            <img src="/screenshot2.png" alt="Screenshot 2" style={{
              width: '200px',
              position: 'absolute',
              left: '30%',
              top: 'calc(150px)',
              transform: 'translateX(-50%)'
            }}/>
          </Parallax>
          <Parallax speed={-20}>
            <img src="/screenshot3.png" alt="Screenshot 3" style={{
              width: '200px',
              position: 'absolute',
              left: '70%',
              top: 'calc(250px)',
              transform: 'translateX(-50%)'
            }}/>
          </Parallax>
          <Parallax speed={-13}>
            <img src="/screenshot6.png" alt="Screenshot 4"
                 style={{width: '200px', position: 'absolute', left: '65%', top: 0}}/>
          </Parallax>
          <Parallax speed={-10}>
            <img src="/screenshot5.png" alt="Screenshot 5" style={{
              width: '200px',
              position: 'absolute',
              left: '85%',
              top: 'calc(10px)',
              transform: 'translateX(-20%)'
            }}/>
          </Parallax>
          <Parallax speed={-20}>
            <img src="/screenshot4.png" alt="Screenshot 6"
                 style={{width: '200px', position: 'absolute', left: '23%', top: 'calc(60vh)'}}/>
          </Parallax>
        </div>
      }
    </ParallaxProvider>
  </div>
};

export default function Home() {
  return <main>
    <TopBar/>
    <div>
      <Hero showParallax={true}/>
    </div>
    <div style={{backgroundColor: '#fff', height: '50vh', padding: '100px' }}>
      <Stack direction={{ xs: 'column', sm: 'row' }} style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} spacing={10}>
        <Stack spacing={2} style={{ width: '40%', textAlign: 'justify' }}>
          <Typography variant={'h3'}>¿What&apos;s Jalo?</Typography>
          <br/>
          <Typography>
            A mobile application focused on young people, dedicated to social planning or organizing social outings with friends. This app offers the fastest and easiest-to-use outing organization platform on the market. By using artificial intelligence tools, it suggests places, events, and friends to go out with based on users&apos; preferences.
          </Typography>
          <Typography>
            It promotes going out with friends, setting aside virtual life, and empowering people&apos;s physical adventures with the help of technology.
          </Typography>
          <Typography>
            This application will be heavily equipped with artificial intelligence features that will take the app&apos;s core algorithm to the next level.
          </Typography>
        </Stack>
        <Box style={{ width: '40%' }}>
          <img src={'/friends.jpg'} alt={'friends in the beach'} style={{ width: '100%', borderRadius: '16px' }}/>
        </Box>
      </Stack>
    </div>
  </main>
}
