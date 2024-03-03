import {Button, Grid, Input, Link, Text} from "@nextui-org/react";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import  LandingNav from "../Navbar/LandingNavbar";
import LandingNavbar from "../Navbar/LandingNavbar";


const Landing = () => {
    // console.log(window.innerWidth);
    const navigate = useNavigate();

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    const [loginMessage, setLoginMessage] = useState('')
    const [signupMessage, setSignupMessage] = useState('')
    const [isSignup, isSetSignup] = useState(false)
    const [signupData, setSignupData] = useState({
        userName: '',
        password: '',
        rePassword: '',
        email: ''
    })

    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {

        const token = localStorage.getItem("token")

        console.log(token);
        if(token !=null){
            navigate('/poll')
        }

        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;
    // console.log(isMobile + "edokati");

    const handleLoginEmailChange = (e) => setLoginEmail(e.target.value)

    const handleLoginPasswordChange = (e) => setLoginPassword(e.target.value)


    const userNameChange = (e) => setSignupData({...signupData, userName: e.target.value})

    const signupEmailChange = (e) => setSignupData({...signupData, email: e.target.value})

    const signupPasswordChange = (e) => setSignupData({...signupData, password: e.target.value})
    const signupRePasswordChange = (e) => setSignupData({...signupData, rePassword: e.target.value})

    const loginSubmitHandler = async (e) => {
        if (loginEmail === '' && loginPassword === '')
            setLoginMessage("Please enter email and password")
        else if (loginEmail === '')
            setLoginMessage('Please enter valid email')
        else if (loginPassword === '')
            setLoginMessage('Please enter password')
        else {
            try {
                const response = await axios.post(process.env.REACT_APP_SERVER_URL+'/login', {
                    email: loginEmail,
                    password: loginPassword
                })

                console.log("from login")
                console.log(response);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userId', response.data.userId);
                localStorage.setItem('userName', response.data.userName)
                navigate('/mapping')
            } catch (e) {
                setLoginMessage("Login Failed, try again")
                setLoginEmail('')
                setLoginPassword('')
            }
        }


    }


    const signupSubmitHandler = async (e) => {

        //todo => include validations

        if (signupData.userName === '' || signupData.email === '' || signupData.password === '' || signupData.rePassword === '')
            setSignupMessage("Fields can't be empty")

        else if (signupData.password !== signupData.rePassword)
            setSignupMessage("Passwords don't match")

        else {
            const data = {
                userName: signupData.userName,
                email: signupData.email,
                password: signupData.password
            }

            try {
                const response = await axios.post(process.env.REACT_APP_SERVER_URL + '/signup', data)
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userId', response.data.userId);
                localStorage.setItem('userName', response.data.userName)
                navigate('/poll')
            } catch (e) {
                setSignupMessage("Signup Failed, try again")
                setSignupData({
                    ...signupData,
                    userName: '',
                    password: '',
                    rePassword: '',
                    email: ''
                })
            }

        }


    }

    const setSignIn = (e) => {
        setLoginMessage('')
        setSignupMessage('')
        isSetSignup(false);
    }

    const setSignUp = (e) => {
        setLoginMessage('')
        setSignupMessage('')
        isSetSignup(true)
    }


    let login = <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}>

        <Grid.Container>
            <Grid md={3}></Grid>
            <Grid xs={12} md={6} justify={"center"}><Text h3 css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}>Login to your Account</Text></Grid>
            <Grid md={3}></Grid>

            <Grid xs={2} md={4}></Grid>
            <Grid xs={8} md={4} justify={"center"} style={{marginTop: "5%"}}>
                <Input type="email" size="md" variant="bordered" labelPlaceholder={"Enter Email"} fullWidth={true}
                       onChange={handleLoginEmailChange} value={loginEmail}/>
            </Grid>
            <Grid xs={2} md={4}></Grid>

            <Grid xs={2} md={4}></Grid>
            <Grid xs={8} md={4} justify={"center"} style={{marginTop: "5%"}}>
                <Input.Password type="Password" size="md" variant="bordered" labelPlaceholder={"Enter Password"}
                                fullWidth={true} onChange={handleLoginPasswordChange} value={loginPassword}/>
            </Grid>
            <Grid xs={2} md={4}></Grid>


            <Grid xs={3} md={4}></Grid>
            <Grid xs={6} md={4} justify={"center"} style={{marginTop: "3%"}}>
                <Button type={"submit"} onPress={loginSubmitHandler} style={{zIndex:1}}>Sign In</Button>
            </Grid>
            <Grid xs={3} md={4}></Grid>

            <Grid xs={2} md={2}></Grid>
            <Grid xs={8} md={8} justify={"center"} style={{marginTop: "3%"}}>
                <Text h4 color="error">
                    {loginMessage}
                </Text>
            </Grid>
            <Grid xs={2} md={2}></Grid>

            <Grid xs={4} md={4}></Grid>
            <Grid xs={4} md={4} justify={"center"}>
                OR
            </Grid>
            <Grid xs={4} md={4}></Grid>


            <Grid xs={2} md={4}></Grid>
            <Grid xs={8} md={4} justify={"center"} style={{marginTop: "3%"}}>
                <Button type={"submit"} onPress={setSignUp} style={{zIndex:1}}>Sign Up</Button>
            </Grid>
            <Grid xs={2} md={4}></Grid>

            <Grid xs={2} md={4}></Grid>
            <Grid xs={8} md={4} justify={"center"} style={{marginTop: "3%"}}>

            </Grid>
            <Grid xs={2} md={4}></Grid>


        </Grid.Container>


    </div>


    let signup = <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}>

        <Grid.Container>
            <Grid md={3}></Grid>
            <Grid xs={12} md={6} justify={"center"}><Text h3 css={{
                textGradient: "45deg, $yellow600 -20%, $red600 100%",
            }}>Create an Account</Text></Grid>
            <Grid md={3}></Grid>

            <Grid md={2}></Grid>
            <Grid xs={12} md={8} justify={"center"}>Enter your details to create your account</Grid>
            <Grid md={2}></Grid>


            <Grid xs={2} md={4}></Grid>
            <Grid xs={8} md={4} justify={"center"} style={{marginTop: "5%"}}>
                <Input type="text" size="md" variant="bordered" labelPlaceholder={"User Name"} fullWidth={true}
                       onChange={userNameChange} value={signupData.userName}/>
            </Grid>
            <Grid xs={2} md={4}></Grid>


            <Grid xs={2} md={4}></Grid>
            <Grid xs={8} md={4} justify={"center"} style={{marginTop: "3%"}}>
                <Input type="email" size="md" variant="bordered" labelPlaceholder={"Enter your Email"} fullWidth={true}
                       onChange={signupEmailChange} value={signupData.email}/>
            </Grid>
            <Grid xs={2} md={4}></Grid>


            <Grid xs={2} md={4}></Grid>
            <Grid xs={8} md={4} justify={"center"} style={{marginTop: "3%"}}>
                <Input type="Password" size="md" variant="bordered" labelPlaceholder={"Your super secret Password"}
                       fullWidth={true} onChange={signupPasswordChange} value={signupData.password}/>
            </Grid>
            <Grid xs={2} md={4}></Grid>

            <Grid xs={2} md={4}></Grid>
            <Grid xs={8} md={4} justify={"center"} style={{marginTop: "3%"}}>
                <Input type="Password" size="md" variant="bordered" labelPlaceholder={"Re-Enter Your  secret Password"}
                       fullWidth={true} onChange={signupRePasswordChange} value={signupData.rePassword}/>
            </Grid>
            <Grid xs={2} md={4}></Grid>


            <Grid xs={3} md={4}></Grid>
            <Grid  xs={6} md={4} justify={"center"} style={{marginTop: "3%"}}>
                <Button type={"submit"} onPress={signupSubmitHandler} style={{zIndex:1}}> Sign Up</Button>
            </Grid>
            <Grid xs={3} md={4}></Grid>

            <Grid xs={2} md={2}></Grid>
            <Grid xs={8} md={8} justify={"center"} style={{marginTop: "3%"}}>
                <Text h4 color="error">
                    {signupMessage}
                </Text>
            </Grid>
            <Grid xs={2} md={2}></Grid>

            <Grid xs={4} md={4}></Grid>
            <Grid xs={4} md={4} justify={"center"}>
                OR
            </Grid>
            <Grid xs={4} md={4}></Grid>


            <Grid xs={3} md={4}></Grid>
            <Grid xs={6} md={4} justify={"center"} style={{marginTop: "3%"}}>
                <Button type={"submit"} onPress={setSignIn} style={{zIndex:1}}>Sign In
                </Button>
            </Grid>
            <Grid xs={3} md={4}></Grid>


            <Grid xs={2} md={4}></Grid>
            <Grid xs={8} md={4} justify={"center"} style={{marginTop: "3%"}}>

            </Grid>
            <Grid xs={2} md={4}></Grid>

        </Grid.Container>
    </div>

    return <>

        <LandingNavbar/>
        <Grid.Container gap={2}>


            <Grid md={6} style={{maxWidth: "100vw", height: "100vh", backgroundColor: '#0e1111'}}>

            </Grid>


            <Grid md={6} xs={12}>

                {isSignup ? signup : login}

            </Grid>


        </Grid.Container>

    </>

}


export default Landing
