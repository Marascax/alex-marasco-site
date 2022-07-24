import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SideMenuOption = props => {
    const title = props.title;

    return (
        <Box
            width='100%'
            height='100%'
            sx={{
                '&:hover': {
                    transformOrigin: 'top left',
                    transform: 'scale(1.1)',
                    boxShadow: 3
                }
            }}>

            <Typography variant='h4'>
                {title}
            </Typography>

        </Box>
    )
}

export default SideMenuOption;