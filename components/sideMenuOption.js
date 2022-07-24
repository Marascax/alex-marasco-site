import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SideMenuOption = props => {
    const title = props.title;

    const settings = props.settings;

    // default hover settings
    let hoverSettings = {
        cursor: 'pointer',
        transform: 'scale(1.1)',
        boxShadow: 3
    }

    // get new hover settings if specified
    // !! turns null or undefined into false
    hoverSettings = !!settings?.hover ? settings.hover : hoverSettings;

    return (
        <Box
            width='100%'
            height='100%'
            sx={{
                '&:hover': hoverSettings
            }}>

            <Typography variant='h4'>
                {title}
            </Typography>

        </Box>
    )
}

export default SideMenuOption;