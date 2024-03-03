
import { Navbar, Text,Button,Dropdown,Avatar,Link } from "@nextui-org/react";
import { Modal, Input, Row, Checkbox } from "@nextui-org/react";
import { MdPoll } from 'react-icons/md';
import { useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";



const Nav = (props)=>{
//{props.poll ? isActive : ''}
    // props.leader ? isActive:''
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


    const editProfileHandler = (e)=>{
    setVisible(true)
    }



    const updateHandler = (e)=>{


    }

    const collapseItems = [
        {name: "Poll", link: '/'},
        {name: "Leader Board", link: '/leaderboard'},
        {name: "Edit Profile (Coming Soon..)", link: '/'},
        {name: "Logout", link: '/'},
    ];

    function onLinkClick(e) {
        e.preventDefault();
        // further processing happens here
        //history.push('/about')

        switch(e.target.innerHTML){
            case 'Poll':
                navigate('/poll')
                break;
            case 'Leader Board':
                navigate('/leaderboard')
                break;
            case 'Edit Profile (Coming Soon..)':
                break;
            case 'Logout':
                logoutHandler(e)
                break;

        }

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

        <Navbar isBordered variant="sticky">
            <Navbar.Toggle showIn="xs"/>
            <Navbar.Brand>
                <MdPoll size={40}/> &nbsp;&nbsp;

                <Text b color="inherit">
                    Poll.Me
                </Text>
            </Navbar.Brand>


            <Navbar.Content hideIn="md" variant="underline">

                {poll}
                {leader}
                <Navbar.Item>
                    {data == null ? '': <Dropdown>
                        <Dropdown.Button color='default' light>
                            {data}
                        </Dropdown.Button>
                        <Dropdown.Menu aria-label="Static Actions">
                            <Dropdown.Item key="edit"> <Text onClick={editProfileHandler}> Edit Profile </Text> </Dropdown.Item>
                            <Dropdown.Item key="logout" color="error" > <Text onClick={logoutHandler} color="error">Logout</Text> </Dropdown.Item>

                        </Dropdown.Menu>
                    </Dropdown>}
                </Navbar.Item>
            </Navbar.Content>
            <Navbar.Collapse>
                {collapseItems.map((item, index) => (
                    <Navbar.CollapseItem
                        key={item.name}

                    >
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%",
                            }}
                            href={item.link}
                            onClick={onLinkClick}

                        >
                            {item.name}
                        </Link>
                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>
        </Navbar>



        <Modal
            closeButton
            blur
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
        >
            <Modal.Header>
                <Text id="modal-title" size={18}>
                    Welcome to
                    <Text b size={18}>
                        Update Profile
                    </Text>
                </Text>
            </Modal.Header>
            <Modal.Body>
                <Input
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="Email"

                />
                <Input
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="Password"

                />

            </Modal.Body>
            <Modal.Footer>
                <Button auto flat color="error" onPress={closeHandler}>
                    Close
                </Button>
                <Button auto onPress={updateHandler} bordered disabled>
                   Update
                </Button>
            </Modal.Footer>
        </Modal>



    </>



}


export default Nav
