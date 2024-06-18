import {Parallax, ParallaxProvider} from "react-scroll-parallax";
import React from "react";
import {makeStyles, Theme} from "@mui/material";

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

const useStyles = makeStyles((theme: Theme) => ({

}));

export default Hero;