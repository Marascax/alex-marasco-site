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
                height: '100vh',
                width: '100vw',
                position: 'absolute'
            }}>

            <Head>
                <title>Alexander Marasco</title>
                <meta name="description" content="Welcome to the personal website for Alexander Marasco" />
            </Head>

            <Stack 
                direction="column" 
                spacing={2}
                width='100%'
                height='100%'
                // want this to appear over decoration PaperItem
                position='absolute'
                zIndex={10}>

                {/* Name plate at the top */}
                <Box
                    width='100%'
                    height='auto'
                    display='flex'
                    justifyContent='center'>

                    <Typography variant='h2' fontWeight={400}>
                        ALEXANDER MARASCO
                    </Typography>
                    
                </Box>

                <Box
                    width='100%'
                    height='auto'
                    display='flex'
                    overflow='hidden'>

                    {/* side menu | image | side menu */}
                    <Stack
                        direction='row'
                        width='100%'>

                        {/* Image */}
                        <Box
                            width='100%'
                            display='flex'
                            justifyContent='center'
                            overflow='hidden'>

                            {/* Image moves from bottom to top */}
                            <Slide 
                                direction='up' 
                                in 
                                mountOnEnter 
                                unmountOnExit 
                                container={containerRef.current}
                                easing='ease-in-out'>

                                <CardMedia
                                    component='img'
                                    sx={{
                                        width: 'auto',
                                        height: 'auto'
                                    }}
                                    src='/Alex_Marasco.jpg'/>

                            </Slide>

                        </Box>

                    </Stack>

                </Box>

            </Stack>

            {/* aethstetic paper item to avoid bland background */}
            <PaperItem 
                elevation={1} 
                sx={{ 
                    height: '15%', 
                    position: 'absolute', 
                    zIndex: 1,
                    left: 0,
                    right: 0,
                    bottom: 0
                }}/>

        </PaperItem>
    )
}

export default Home;
