import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import SideMenuOption from '../components/sideMenuOption';

const SideMenu = props => {
    // menu options to choose from
    const options = props.options;

    // create a side menu option for each option passed
    const sideMenuOptions = options.map(option => {
        <SideMenuOption title={option.title}/>
    })

    return (
        <Stack
            divider={<Divider/>}
        >

            {sideMenuOptions}

        </Stack>
    )
}

export default SideMenu;