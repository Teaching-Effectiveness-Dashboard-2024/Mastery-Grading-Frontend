
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

        <Navbar isBordered shouldHideOnScroll variant="sticky">
            <Navbar.Brand>
                <MdPoll size={40}/> &nbsp;&nbsp;
                <Text b color="inherit" hideIn="xs">
                    Mastery Grading App
                </Text>
            </Navbar.Brand>
            <Navbar.Content hideIn="xs" variant="underline">
                <Navbar.Link href="/dashboard">Dashboard</Navbar.Link>
                <Navbar.Link href="/mapping">Mapping</Navbar.Link>
                <Navbar.Link href="/grade-calculator">Grade Calculator</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
                <Navbar.Item>
                    <Button auto flat color={"error"} onClick={logoutHandler} >
                        Logout
                    </Button>
                </Navbar.Item>
            </Navbar.Content>
        </Navbar>


    </>

}

export default LoggedInNavbar
