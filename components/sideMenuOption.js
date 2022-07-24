import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SideMenuOption = props => {
    const title = props.title;

    return (
        <Box>

            <Typography variant='h4'>
                {title}
            </Typography>

        </Box>
    )
}

export default SideMenuOption;