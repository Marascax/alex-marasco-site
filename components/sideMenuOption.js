import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SideMenuOption = props => {
    const title = props.title;

    const settings = props.settings;

    // default hover settings
    let defaultHoverSettings = {
        cursor: 'pointer',
        transition: 'transform .2s ease-in-out',
        transform: 'scale(1.1)',
        boxShadow: 3
    }

    // override hover settings if props specifies them
    defaultHoverSettings = (
        // !! turns null or undefined into false
        !!settings?.hover ? {
            // props with same name has the "rightmost" (later obj listed) value used
            ...defaultHoverSettings,
            ...settings.hover
        } : defaultHoverSettings
    );

    return (
        <Box
            width='100%'
            height='100%'
            padding='1%'
            sx={{
                '&:hover': defaultHoverSettings,
                transition: '.2s ease-in-out'
            }}>

            <Typography variant='h4'>
                {title}
            </Typography>

        </Box>
    )
}

export default SideMenuOption;