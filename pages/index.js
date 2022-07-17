import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';

import { useRef } from 'react';

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useAppContext } from '../lib/appContext';

const PaperItem = styled(Paper)(({ theme }) => ({
    ...theme
}));

const Home = () => {
    const context = useAppContext();

    const containerRef = useRef(null);

    return (
        <PaperItem 
            elevation={0} 
            sx={{ 
                height: '100vh'
            }}
        >
            <Head>
                <title>Alexander Marasco</title>
                <meta name="description" content="Welcome to the personal website for Alexander Marasco" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <Stack 
                direction="column" 
                sx={{ 
                    height: '100%',
                    zIndex: 2 
                }}
            >
                {/* Name plate at the top */}
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        mt: '3%'
                    }}
                >
                    <Typography variant='h2' fontWeight={400}>
                        ALEXANDER MARASCO
                    </Typography>
                </Box>
                {/* Image */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100%',
                        overflow: 'hidden',
                        mt: '2%'
                    }}
                >
                    <Slide 
                        direction='up' 
                        in 
                        mountOnEnter 
                        unmountOnExit 
                        container={containerRef.current}
                        easing='ease-in-out'
                    >
                    <CardMedia
                        component='img'
                        sx={{
                            width: 'auto',
                            maxHeight: '90%'
                        }}
                        src='/Alex_Marasco.jpg'
                    />
                    </Slide>
                </Box>
            </Stack>
        </PaperItem>
    )
}

export default Home;
