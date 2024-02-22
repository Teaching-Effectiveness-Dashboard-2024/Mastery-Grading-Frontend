import {Button, Grid, Text} from "@nextui-org/react";
import {useNavigate} from "react-router-dom";



const Error = ()=>{

    const navigate = useNavigate();

    const sendLogin = ()=>{
        navigate("/");
    }


    return (
        <Grid.Container gap={4} >
            <Grid md={12} justify='center'>
                <Text h1>Hmm, looks like a 404!.</Text>
            </Grid>
            <Grid md={4} >

            </Grid>
            <Grid md={4} justify='center'>
                <Button onClick={sendLogin}>Take Me Back!!</Button>
            </Grid>
            <Grid md={4}> </Grid>
        </Grid.Container>
    )

}


export default Error
