import {Button, Grid, Input, Link, Text} from "@nextui-org/react";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import LandingNavbar from "../Navbar/LandingNavbar";
import Footer from "../Footer/Footer";


const Landing = () => {
    // console.log(window.innerWidth);
    const navigate = useNavigate();

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [loginMessage, setLoginMessage] = useState('')

    const [signupMessage, setSignupMessage] = useState('')
    const [isSignup, isSetSignup] = useState(false)
    const [signupData, setSignupData] = useState({
        email: '',
        password: '',
        rePassword: '',
        api_token:''

    })

    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {

        const email = localStorage.getItem("email")

        console.log(email);
        if(email !=null){
            navigate('/dashboard')
        }

        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);


    const handleLoginEmailChange = (e) => setLoginEmail(e.target.value)

    const handleLoginPasswordChange = (e) => setLoginPassword(e.target.value)


    const apiTokenChange = (e) => setSignupData({...signupData, api_token: e.target.value})

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
                localStorage.setItem('email', response.data.email)
                navigate('/dashboard')
            } catch (e) {
                setLoginMessage("Login Failed, try again")
                setLoginEmail('')
                setLoginPassword('')
            }
        }


    }


    const signupSubmitHandler = async (e) => {

        //todo => include validations

        if (signupData.api_token === '' || signupData.email === '' || signupData.password === '' || signupData.rePassword === '')
            setSignupMessage("Fields can't be empty")

        else if (signupData.password !== signupData.rePassword)
            setSignupMessage("Passwords don't match")

        else {
            const data = {
                email: signupData.email,
                password: signupData.password,
                api_token: signupData.api_token,
            }

            try {
                const response = await axios.post(process.env.REACT_APP_SERVER_URL + '/signup', data)
                // localStorage.setItem('token', response.data.token);
                localStorage.setItem('userId', response.data.email);
                navigate('/dashboard')
            } catch (e) {
                setSignupMessage("Signup Failed, try again")
                setSignupData({
                    ...signupData,
                    email: '',
                    password: '',
                    rePassword: '',
                    api_token:''
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

            <Grid  md={2}></Grid>
            <Grid  md={8} justify={"center"} style={{marginTop: "5%"}}>
                <Input type="email" size="md" variant="bordered" labelPlaceholder={"Enter Email"} fullWidth={true}
                       onChange={handleLoginEmailChange} value={loginEmail}/>
            </Grid>
            <Grid  md={2}></Grid>

            <Grid  md={2}></Grid>
            <Grid  md={8} justify={"center"} style={{marginTop: "5%"}}>
                <Input.Password type="Password" size="md" variant="bordered" labelPlaceholder={"Enter Password"}
                                fullWidth={true} onChange={handleLoginPasswordChange} value={loginPassword}/>
            </Grid>
            <Grid  md={2}></Grid>


            <Grid  md={2}></Grid>
            <Grid  md={8} justify={"center"} style={{marginTop: "5%"}}>
                <Button type={"submit"} onPress={loginSubmitHandler} style={{zIndex:1}}>Sign In</Button>
            </Grid>
            <Grid  md={2}></Grid>

            <Grid  md={2}></Grid>
            <Grid  md={8} justify={"center"} style={{marginTop: "5%"}}>
                <Text h4 color="error">
                    {loginMessage}
                </Text>
            </Grid>
            <Grid  md={2}></Grid>

            <Grid  md={2}></Grid>
            <Grid  md={8} justify={"center"}>
                Or create a new account here👇
            </Grid>
            <Grid  md={2}></Grid>


            <Grid  md={3}></Grid>
            <Grid  md={6} justify={"center"} style={{marginTop: "3%"}}>
                <Button type={"submit"} onPress={setSignUp} style={{zIndex:1}}>Sign Up</Button>
            </Grid>
            <Grid  md={3}></Grid>

            <Grid  md={4}></Grid>
            <Grid  md={4} justify={"center"} style={{marginTop: "3%"}}>

            </Grid>
            <Grid  md={4}></Grid>


        </Grid.Container>


    </div>


    let signup = <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}>

        <Grid.Container>
            <Grid md={3}></Grid>
            <Grid md={6} justify={"center"}><Text h3 css={{
                textGradient: "45deg, $yellow600 -20%, $red600 100%",
            }}>Create an Account</Text></Grid>
            <Grid md={3}></Grid>

            <Grid md={2}></Grid>
            <Grid md={8} justify={"center"}>Enter your details to create your account</Grid>
            <Grid md={2}></Grid>

            <Grid  md={2}></Grid>
            <Grid  md={8} justify={"center"} style={{marginTop: "5%"}}>
                <Input type="email" size="md" variant="bordered" labelPlaceholder={"Enter your Email"} fullWidth={true}
                       onChange={signupEmailChange} value={signupData.email}/>
            </Grid>
            <Grid  md={2}></Grid>


            <Grid  md={2}></Grid>
            <Grid  md={8} justify={"center"} style={{marginTop: "5%"}}>
                <Input type="Password" size="md" variant="bordered" labelPlaceholder={"Enter your Password"}
                       fullWidth={true} onChange={signupPasswordChange} value={signupData.password}/>
            </Grid>
            <Grid  md={2}></Grid>

            <Grid  md={2}></Grid>
            <Grid  md={8} justify={"center"} style={{marginTop: "5%"}}>
                <Input type="Password" size="md" variant="bordered" labelPlaceholder={"Re-Enter Your Password"}
                       fullWidth={true} onChange={signupRePasswordChange} value={signupData.rePassword}/>
            </Grid>
            <Grid  md={2}></Grid>

            <Grid md={2}></Grid>
            <Grid md={8} justify={"center"} style={{marginTop: "5%"}}>
                <Input type="text" size="md" variant="bordered" labelPlaceholder={"Enter your Canvas API token"} fullWidth={true}
                       onChange={apiTokenChange} value={signupData.api_token}/>
            </Grid>
            <Grid md={2}></Grid>


            <Grid  md={2}></Grid>
            <Grid   md={8} justify={"center"} style={{marginTop: "5%"}}>
                <Button type={"submit"} onPress={signupSubmitHandler} style={{zIndex:1}}> Sign Up</Button>
            </Grid>
            <Grid  md={2}></Grid>

            <Grid  md={2}></Grid>
            <Grid  md={8} justify={"center"} style={{marginTop: "5%"}}>
                <Text h4 color="error">
                    {signupMessage}
                </Text>
            </Grid>
            <Grid  md={2}></Grid>

            <Grid  md={2}></Grid>
            <Grid  md={8} justify={"center"}>
                Or log into your account here👇
            </Grid>
            <Grid  md={2}></Grid>


            <Grid  md={3}></Grid>
            <Grid  md={6} justify={"center"} style={{marginTop: "5%"}}>
                <Button type={"submit"} onPress={setSignIn} style={{zIndex:1}}>Sign In
                </Button>
            </Grid>
            <Grid  md={3}></Grid>


            <Grid  md={4}></Grid>
            <Grid  md={4} justify={"center"} style={{marginTop: "5%"}}>

            </Grid>
            <Grid  md={4}></Grid>

        </Grid.Container>
    </div>


    let tutorial = <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}>

        <Grid.Container>
            <Grid md={2}></Grid>
            <Grid md={8} justify={"center"} style={{marginTop: "3%"}}>
                <Text h3 css={{
                    textGradient: "45deg, $yellow600 -20%, $red600 100%",
                }} fullWidth={true}>Welcome to Mastery Grading App - A Canvas LMS Plugin!</Text>
            </Grid>
            <Grid md={2}></Grid>

            <Grid md={2}></Grid>
            <Grid md={8} justify={"center"} >
                <Text h4 css={{
                    textGradient: "45deg, $yellow600 -20%, $red600 100%",
                }} fullWidth={true}>Simply get letter grades for your custom grading practices.</Text>
            </Grid>
            <Grid md={2}></Grid>

            <Grid md={1}></Grid>
            <Grid md={8} >
                <Text h5 fullWidth={true} color="warning">Create Canvas API Access token before signing up, use below tutorial for creating API token.</Text>
            </Grid>
            <Grid md={3}></Grid>
            <Grid md={1}></Grid>
            <Grid md={11} >
                <Text style={{color:"red", paddingRight:"10px"}} fullWidth={true}>Step 1:</Text>
                <Text fullWidth={true} > Login into your Canvas LMS application.</Text>
            </Grid>
            <Grid md={1}></Grid>

            <Grid md={11} style={{marginTop: "1%"}}>
                <Text style={{color:"red", paddingRight:"10px"}} fullWidth={true}>Step 2: </Text>
                <Text fullWidth={true}> Click on "Account" on the left navigation bar.</Text>
            </Grid>
            <Grid md={1}></Grid>

            <Grid md={11} style={{marginTop: "1%"}}>
                <Text  style={{color:"red",paddingRight:"10px"}} fullWidth={true}>Step 3:</Text>
                <Text fullWidth={true}> Click on "Settings" button.</Text>
            </Grid>
            <Grid md={1}></Grid>

            <Grid md={11} style={{marginTop: "1%"}}>
                <Text  style={{color:"red",paddingRight:"10px"}}  fullWidth={true}>Step 4:</Text>
                <Text fullWidth={true} >In "Settings" page scroll down until you find "+ New Access Token" button.</Text>
            </Grid>
            <Grid md={1}></Grid>

            <Grid md={11} style={{marginTop: "1%"}}>
                <Text style={{color:"red",paddingRight:"10px"}}  fullWidth={true}>Step 5:</Text>
                <Text fullWidth={true}> Specify the purpose and expiry dates after clicking the "+ New Access Token" button.</Text>
            </Grid>
            <Grid md={1}></Grid>

            <Grid md={11} style={{marginTop: "1%"}}>

                <Text style={{color:"red",paddingRight:"10px"}}  fullWidth={true} >Step 6:</Text>
                <Text fullWidth={true}> Click "Generate Token" button to generate your API token and save/copy it to provide it during sigining up.</Text>
            </Grid>
            <Grid md={12}></Grid>
            <Grid md={1}></Grid>
            <Grid md={11} style={{marginTop: "1%"}}>

                <Link color="success" fullWidth={true} isExternal underline block href="https://youtu.be/cZ5cn8stjM0">
                    Click on this link for a video demo
                </Link>
            </Grid>
            <Grid md={12}></Grid>



        </Grid.Container>
    </div>

    return <>

        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", overflow:"hidden"}}>
            <LandingNavbar />
            <Grid.Container gap={2} style={{ flexGrow: 1 }}>
                <Grid md={8} style={{ backgroundColor: '#0e1111' }}>
                    {tutorial}
                </Grid>
                <Grid md={4}>
                    {isSignup ? signup : login}
                </Grid>
            </Grid.Container>
            <Footer />
        </div>

    </>

}


export default Landing