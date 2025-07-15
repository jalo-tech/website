import React, { useState } from 'react';
import Box from "@mui/material/Box";
import {Grid, Stack, Theme, Typography} from "@mui/material";
import ImageStack from "@/components/ImageStack";
import {useTranslation} from "next-i18next";
import { makeStyles } from "@mui/styles";

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

const WhatIsThisSection: React.FC = () => {
    const classes = useStyles();
    const { t } = useTranslation();
    const [activeImage, setActiveImage] = useState(1);

    return <Box className={classes.container}>
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
                            <span style={{ color: '#4A4A4A', fontSize: '0.9em' }}>{t('whatIsThisSectionTitle1')}</span> <span style={{ fontSize: '1em' }}>{t('whatIsThisSectionTitle2')}</span>
                        </Typography>
                        {/*<Typography sx={{ fontSize: '18px', fontWeight: '500' }}>*/}
                        {/*  Coordinar salidas nunca fue tan fácil. Con JALO, hacer planes con tus amigos es rápido, organizado y sin estrés.*/}
                        {/*</Typography>*/}
                    </Stack>
                    <Stack spacing={4}>
                        {steps.map((step) => (
                            <Box key={step.number} sx={{ display: 'flex', alignItems: 'flex-start', cursor: 'pointer' }} onClick={() => setActiveImage(step.number)}>
                                {/* Número circular */}
                                <Box
                                    sx={{
                                        width: 48,
                                        height: 48,
                                        borderRadius: '50%',
                                        backgroundColor: activeImage === step.number ? '#FFE500' : 'black',
                                        color: activeImage === step.number ? 'black' : 'white',
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
                        <ImageStack activeImage={activeImage}/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </Box>;
};

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        height: 'fit-content',
        width: '100%',
        borderRadius: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            borderRadius: '50px',
        },
    },
}));

export default WhatIsThisSection;