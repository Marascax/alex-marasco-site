import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';

import SideMenuOption from '../components/sideMenuOption';

import { useRef } from 'react';

const SideMenu = props => {
    const containerRef = useRef(null);

    // menu options to choose from
    const options = props.options;

    // create a side menu option for each option passed
    const sideMenuOptions = options.map((option, index) => {
        return <SideMenuOption title={option?.title} settings={option?.settings} key={index}/>
    });

    return (
        <Slide
            direction={props.slideDirection}
            in 
            mountOnEnter 
            unmountOnExit 
            container={containerRef.current}
            timeout={500}
            easing='ease-in-out'>
        <Stack
            width='100%'>

            {sideMenuOptions}

        </Stack>
        </Slide>
    )
}

export default SideMenu;