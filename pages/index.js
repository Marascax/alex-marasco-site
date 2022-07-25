import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';

import { useRef } from 'react';
import SideMenu from '../containers/sideMenu';

import Head from 'next/head'
import dynamic from 'next/dynamic'

import { useAppContext } from '../lib/appContext';

const PaperItem = styled(Paper)(({ theme }) => ({
    ...theme
}));

const Home = () => {
    const context = useAppContext();

    const containerRef = useRef(null);

    // menu for quickly getting information about myself

    // settings for quick text menu options
    const quickTextMenuSettings = {
        styling: {
            backgroundColor: 'primary.main',
            textAlign: 'right',
            paddingTop: '5%',
            paddingBottom: '5%',
            paddingRight: '5%'
        },
        hover: {
            transformOrigin: 'right'
        }
    }

    // quick text menu options
    const quickTextMenu = [
        {
            title: 'About Me',
            settings: quickTextMenuSettings
        },
        {
            title: 'Contact Information',
            settings: quickTextMenuSettings
        }
    ]

    // menu for navigation

    // settings for navigation menu options
    const navigationMenuSettings = {
        styling: {
            backgroundColor: 'primary.main',
            textAlign: 'left',
            paddingTop: '5%',
            paddingBottom: '5%',
            paddingLeft: '5%'
        },
        hover: {
            transformOrigin: 'left'
        }
    }

    // navigation menu options
    const navigationMenu = [
        {
            title: 'Work History',
            settings: navigationMenuSettings
        },
        {
            title: 'Education',
            settings: navigationMenuSettings
        },
        {
            title: 'Accolades',
            settings: navigationMenuSettings
        }
    ]

    return (
        <PaperItem 
            elevation={0} 
            sx={{ 
                height: '100vh',
                width: '100vw',
                position: 'absolute',
                backgroundColor: 'primary.main'
            }}>

            <Head>
                <title>
                    Alexander Marasco
                </title>
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
                    display='flex'
                    justifyContent='center'
                    mt='1%'>

                    <Typography 
                        variant='h2'
                        fontFamily='"Dancing Script"'
                        fontWeight={700}>
                        ALEXANDER MARASCO
                    </Typography>
                    
                </Box>

                <Box
                    width='100%'
                    display='flex'
                    overflow='hidden'>

                    {/* side menu | image | side menu */}
                    <Stack
                        direction='row'
                        width='100%'
                        mb='1%'>

                        {/* quick-text side menu */}
                        <Box
                            width='25%'
                            maxWidth='25%'
                            mt='1%'
                            ml='1%'>

                            <SideMenu options={quickTextMenu}/>

                        </Box>
                        

                        {/* Image */}
                        <Box
                            width='50%'
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
                                timeout={500} // duration in milliseconds
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

                        {/* navigation side menu */}
                        <Box
                            width='25%'
                            maxWidth='25%'
                            mt='1%'
                            mr='1%'>

                            <SideMenu options={navigationMenu}/>

                        </Box>

                    </Stack>

                </Box>

            </Stack>

            {/* aethstetic paper item to avoid bland background */}
            <PaperItem 
                elevation={1} 
                sx={{ 
                    height: '15%', 
                    backgroundColor: 'primary.main',
                    position: 'absolute', 
                    zIndex: 3,
                    left: 0,
                    right: 0,
                    bottom: 0
                }}/>

            <PaperItem 
                elevation={1} 
                sx={{ 
                    height: '15%', 
                    opacity: '85%',
                    backgroundColor: 'primary.main',
                    position: 'absolute', 
                    zIndex: 2,
                    left: 0,
                    right: 0,
                    bottom: '15%'
                }}/>

            <PaperItem 
                elevation={1} 
                sx={{ 
                    height: '15%', 
                    opacity: '60%',
                    backgroundColor: 'primary.main',
                    position: 'absolute', 
                    zIndex: 1,
                    left: 0,
                    right: 0,
                    bottom: '30%'
                }}/>

        </PaperItem>
    )
}

// issues with client and server side rendering emerged with className props not
// matching, so this will dynamically render the component client-side
// dynamic() allows for lazy loading React components
// ssr = false to disable server-side rendering
export default dynamic(() => Promise.resolve(Home), { ssr: false });

