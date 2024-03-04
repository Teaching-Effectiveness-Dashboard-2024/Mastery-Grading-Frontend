import {Button, Grid, Text} from "@nextui-org/react";
import {useNavigate} from "react-router-dom";
import LoggedInNavbar from "../Navbar/LoggedInNavbar";



const Mapping = ()=>{

    const navigate = useNavigate();

    const sendLogin = ()=>{
        navigate("/");
    }


    return (
        <Grid.Container gap={4} >
            <Grid md={12}>
                <LoggedInNavbar/>
            </Grid>
            <Grid md={12} justify='center'>
                <Text h2>Dashboard page</Text>
            </Grid>
            <Grid md={4} >

            </Grid>
            <Grid md={4} justify='center'>
                {/*<Button onClick={sendLogin}>Take Me to home screen!!</Button>*/}
            </Grid>
            <Grid md={4}> </Grid>
        </Grid.Container>
    )

}


export default Mapping
