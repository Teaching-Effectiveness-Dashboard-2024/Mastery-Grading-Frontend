import {Button, Avatar, Grid, Image, Text} from "@nextui-org/react";
import {useNavigate} from "react-router-dom";
import LoggedInNavbar from "../Navbar/LoggedInNavbar";
import {useEffect, useState} from "react";
import axios from "axios";



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
            //axios.headers.common['Authorization'] = localStorage.getItem('token');
            const response = await axios.post("http://localhost:5000/dashboard",{"email" : localStorage.getItem("email")})
            // let ar = response.data.map(e=>e)
            console.log(response.data);

            setData(response.data)
        }
        getData().then(r =>  console.log("hello"));
        console.log("outside get")

    },[])




    let page = <Grid.Container gap={4} >
        <Grid md={12}>
            <LoggedInNavbar/>
        </Grid>
        <Grid md={2} justify='right'>
            <Text h3>Dashboard</Text>

        </Grid>
        <Grid md={9} justify="right" AlignItems ="baseline">
            <Text>
                <Text h4> Welcome, {data.user.name}</Text>
            </Text>
        </Grid>
        <Grid md={1} >
            <Avatar
                squared
                src={data.user.imageURL} />
        </Grid>
        <Grid md={12} justify='center'>
            <Text h3 b> About Mastery Grading</Text>
        </Grid>
        <Grid md={12} justify="center">

        </Grid>
    </Grid.Container>

    return <>
        {data.user.name===""?"":page}
    </>

}


export default Mapping
