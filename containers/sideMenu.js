import { Divider } from '@mui/material';
import Stack from '@mui/material/Stack';

import SideMenuOption from '../components/sideMenuOption';

const SideMenu = props => {
    // menu options to choose from
    const options = props.options;

    // create a side menu option for each option passed
    const sideMenuOptions = options.map((option, index) => {
        return <SideMenuOption title={option?.title} settings={option?.settings} key={index}/>
    });

    return (
        <Stack
            width='100%'>

            {sideMenuOptions}

        </Stack>
    )
}

export default SideMenu;