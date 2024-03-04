
import { Navbar, Text,Button,Dropdown,Avatar,Link } from "@nextui-org/react";
import { Modal, Input, Row, Checkbox } from "@nextui-org/react";
import { MdPoll } from 'react-icons/md';
import { useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";



const LoggedInNavbar = (props)=>{
    console.log("from navbar", props);
    const navigate = useNavigate()


    const [visible, setVisible] = useState(false);

    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };

    const data = localStorage.getItem('userName')


    const poll = props.poll ? <Navbar.Link href={'poll'} isActive>Poll here</Navbar.Link> : <Navbar.Link href={'poll'} >Poll here</Navbar.Link>
    const leader = props.leader ? <Navbar.Link href={'leaderboard'} isActive>Leaderboard</Navbar.Link> : <Navbar.Link href={'leaderboard'} >Leaderboard</Navbar.Link>

    const logoutHandler = (e)=>{

        localStorage.clear();

        navigate('/')
        console.log("Bye!");
    }



    useEffect(()=>{

        const getData = async ()=> {
            const config = {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            };

            //  const response = await axios.get("http://localhost:4000/getUserDetails", config)
            // let ar = response.data.map(e=>e)


            //setData(response.data)
        }
        getData()
    })

    return <>

        <Navbar.Brand>
            <MdPoll size={40}/> &nbsp;&nbsp;

            <Text b color="inherit">
                Mastery Grading App
            </Text>
        </Navbar.Brand>


    </>

}

export default LoggedInNavbar
