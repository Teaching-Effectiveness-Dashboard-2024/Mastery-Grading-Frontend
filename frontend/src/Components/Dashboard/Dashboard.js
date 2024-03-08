import {Button, Avatar, Grid, Image, Text} from "@nextui-org/react";
import {useNavigate} from "react-router-dom";
import LoggedInNavbar from "../Navbar/LoggedInNavbar";
import {useEffect, useState} from "react";
import axios from "axios";



const Dashboard = ()=>{

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

        <Grid md={11} justify="flex-end" >
            <Text>
                <Text h4 > Welcome, {data.user.name}</Text>
            </Text>
        </Grid>
        <Grid md={1}>
                <Avatar
                    squared
                    src={data.user.imageURL} />
        </Grid>
        <Grid md={12} justify='center'>
            <Text h3 b> About Mastery Grading</Text>
        </Grid>
        <Grid md={12} justify="center">
            <Text blockquote>
                <Text size="$xl" >Embrace Specification Grading</Text>

                <Text size="$xl" >Unlock the power of customization with our "Teaching effectiveness Dashboard"s support for various grading systems,
                including the innovative specification grading.</Text>

                    <Text size="$xl">Say good bye to traditional grading methods and implement your own grading criteria and assessment rubrics according
                to your unique teaching philosophy and course objectives.</Text>

                        <Text size="$xl">Define crystal-clear criteria and levels of achievement for each assignment or assessment, empowering students to
                understand expectations and enabling you to evaluate their performance with precision and fairness.</Text>

                            <Text size="$xl">Seamlessly integrates with canvas lms and provides you best platform to experience the transformative power of
                Specification Grading within our Teaching Effectiveness Dashboard.</Text>
            </Text>
        </Grid>
    </Grid.Container>

    return <>
        {data.user.name===""?"":page}
    </>

}


export default Dashboard
