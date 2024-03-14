import {Button, Avatar, Grid, Image, Text, Card, Row} from "@nextui-org/react";
import {useNavigate} from "react-router-dom";
import LoggedInNavbar from "../Navbar/LoggedInNavbar";
import {useEffect, useState} from "react";
import axios from "axios";
import DisplayMappingTable from "./DisplayMappingTable";



const Mapping = ()=>{

    const navigate = useNavigate();
    const [data, setData] = useState({user:{name:"", imageURL:""}})


    const sendLogin = ()=>{
        navigate("/");
    }

    useEffect( ()=>{
        const getData = async ()=> {
            // const config = {
            //     headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            // };
            const config = {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                }
            };
            //axios.headers.common['Authorization'] = localStorage.getItem('token');
            const response = await axios.post("http://localhost:5000/mapping",{"email" : localStorage.getItem("email")}, config)
            // let ar = response.data.map(e=>e)
            console.log(response.data);

            setData(response.data)
        }
        //getData().then(r =>  console.log("hello"));
        getData();
        console.log("outside get")

    },[])



    let page = <Grid.Container gap={4} >
        <Grid md={12}>
            <LoggedInNavbar
                pageNumber={2}
            />
        </Grid>

        {/*<Grid md={12} justify='center'>*/}
        {/*    /!*<Text h3 b> </Text>*!/*/}
        {/*</Grid>*/}
        <Grid md={3} justify="center" gap={2}>
            <Card css={{maxHeight:"50vh"}}>
                <Card.Header>
                    <Text b>About Mapping</Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body css={{ py: "$10" }}>
                    <Text>
                        Ikkada mapping ki tutorial pettali<br/><br/>
                        ***Some quick example text to build on the card title and make up the
                        bulk of the card's content.***
                    </Text>
                </Card.Body>
                <Card.Divider />
                <Card.Footer>
                    <Row justify="flex-end">
                        <Button size="sm">Create Mapping</Button>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
        <Grid md={9} justify="center">
            <DisplayMappingTable />
        </Grid>
    </Grid.Container>

    return (<>
        {data.user.name===""?"":page}
    </>)

}


export default Mapping
