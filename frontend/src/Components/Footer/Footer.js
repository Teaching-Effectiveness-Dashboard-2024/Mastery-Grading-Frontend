
import {Grid,  Text} from "@nextui-org/react";




const Footer = ()=>{


    return <>
        <Grid.Container gap={2}>
            <Grid md={12} justify={"center"} style={{ maxWidth: "100vw", height: "10vh", backgroundColor: '#0e1111',display: "flex",
                justifyContent: "center",
                alignItems: "center" }}>
                <Text FullWidth={true} > Designed and developed by SJSU.</Text>
            </Grid>
        </Grid.Container>



    </>
}


export default Footer
