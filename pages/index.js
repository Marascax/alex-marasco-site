import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useAppContext } from '../lib/appContext';

const PaperItem = styled(Paper)(({ theme }) => ({
    ...theme
}));

const Home = () => {
    const context = useAppContext();

    return (
        <PaperItem elevation={0} sx={{ height: '100vh' }}>
            <Head>
                <title>Alexander Marasco</title>
                <meta name="description" content="Welcome to the personal website for Alexander Marasco" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <Stack direction="row" sx={{ height: '100%' }}>
                {/* Name plate at the top */}
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        mt: '2%'
                    }}
                >
                    <Typography variant='h2' fontWeight={400}>
                        ALEXANDER MARASCO
                    </Typography>
                </Box>
                {/* Image */}
            </Stack>
        </PaperItem>
    )
}

export default Home;
