
import {Navbar,  Text} from "@nextui-org/react";

import { MdPoll } from 'react-icons/md';



const LandingNavbar = (props)=>{


    return <Navbar isBordered variant="sticky">
        <Navbar.Toggle showIn="xs"/>
        <Navbar.Brand>
            <MdPoll size={40}/> &nbsp;&nbsp;

            <Text b color="inherit">
                Mastery Grading App
            </Text>
        </Navbar.Brand>




    </Navbar>
}


export default LandingNavbar
