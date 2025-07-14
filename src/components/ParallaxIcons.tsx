import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { Box } from '@mui/material';

const icons = [
    { src: '/svg/icon1.svg', top: '10%', left: '90%', speed: -20 },
    { src: '/svg/icon2.svg', top: '10%', left: '90%', speed: 0 },
    { src: '/svg/icon3.svg', top: '70%', left: '48%', speed: -10 },
    { src: '/svg/icon4.svg', top: '25%', left: '53%', speed: -54 },
    { src: '/svg/icon5.svg', top: '90%', left: '45%', speed: -40 },
];

export default function ParallaxIcons() {
    return (
        <ParallaxProvider>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    pointerEvents: 'none',
                    zIndex: 1, // debajo del texto principal si este es 2 o más
                }}
            >
                {icons.map(({ src, top, left, speed }, index) => (
                    <Parallax key={index} speed={speed}>
                        <Box
                            component="img"
                            src={src}
                            alt={`icon-${index}`}
                            sx={{
                                position: 'absolute',
                                top,
                                left,
                                width: 40,
                                height: 40,
                                opacity: 0.8,
                                userSelect: 'none',
                            }}
                        />
                    </Parallax>
                ))}
            </Box>
        </ParallaxProvider>
    );
}