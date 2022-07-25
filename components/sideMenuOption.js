import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SideMenuOption = props => {

    const title = props.title;

    const settings = props.settings;

    let defaultSettings = {
        // default style settings
        styling: {
            backgroundColor: 'transparent'
        },
        // default settings when mouse hovers
        hover: {
            cursor: 'pointer',
            transition: 'transform .2s ease-in-out',
            transform: 'scale(1.1)',
            boxShadow: 3,
            filter: 'brightness(0.85)',
            // make sure option appears over other options
            zIndex: 10
        },
        // default settings when mouse isn't hovering
        notHover: {
            transformOrigin: 'top left',
            transition: '.2s ease-in-out',
            filter: 'brightness(1)',
            zIndex: 0
        }
    }

    // merge the default and props settings together
    // when using the spread operator, properties with the same name use the value from the "rightmost" obj
    // "rightmost" = the object listed later
    // if the settings obj does not have a property defined, the spread still works and just enumerates no keys from settings
    const styleSettings = {
        ...defaultSettings.styling,
        ...settings.styling,
        '&:hover': {
            ...defaultSettings.hover,
            ...settings.hover
        },
        '&:not(:hover)': {
            ...defaultSettings.notHover,
            ...settings.notHover
        }
    }

    return (
        <Box
            width='100%'
            height='100%'

            position='relative'
            sx={{

                ...styleSettings
            }}>

            <Typography variant='h4' fontFamily='Roboto' fontWeight={300}>
                {title}
            </Typography>

        </Box>
    )
}

export default SideMenuOption;