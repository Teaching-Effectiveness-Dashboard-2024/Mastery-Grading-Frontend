import {Button, Avatar, Grid, Image, Text} from "@nextui-org/react";
import {useNavigate} from "react-router-dom";
import LoggedInNavbar from "../Navbar/LoggedInNavbar";
import {useEffect, useState} from "react";
import axios from "axios";



const DashboardContent = ()=>{

    const navigate = useNavigate();
    const [data, setData] = useState({name:"", imageURL:""})


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
            console.log(response.data.user);

            setData({...data, name:response.data.user.name, imageURL: response.data.user.imageURL})
        }
        getData();

    },[])

    console.log("outside ue")

    let page = <Grid.Container gap={4}>
        <Grid md={12}>
            <LoggedInNavbar
                pageNumber={1}
            />
        </Grid>

        <Grid md={11}  justify="right">
            <Text >
                <Text b size="$xl" > Welcome, {data.name}</Text>
            </Text>
        </Grid>
        <Grid md={1}>
            <Avatar
                squared
                src={data.imageURL} />
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

    return (<>
        {data.name===""?"":page}
    </>)

}


export default DashboardContent
