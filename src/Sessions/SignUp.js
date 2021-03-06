import React, {useState,useEffect} from "react";
import {Button,Box,Typography} from "@material-ui/core";
import OtpInput from 'react-otp-input';
import './FormStyle.css';
import SocialLogin from "./SocialLogin";
import {Link, Redirect, useHistory} from "react-router-dom";
import {crud} from "../services/crud";
import _ from 'lodash'
import {notify} from "react-notify-toast";
import Loader from "../MainComponents/Loader";
import {useSelector} from "react-redux";
import {selectUser} from "../services/Slices/UserSlice";
import {createMuiTheme,ThemeProvider } from "@material-ui/core/styles";


const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#FF0000",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#00FF00",
            contrastText: "#ffffff",
        },
    },
});

export default function SignUp() {
   
    const history = useHistory();
    let error = [];
    const  isAuthenticated = useSelector(selectUser);
    const [state, setState] = useState(true);
    const [loader, setLoader] = useState(false);
    const [otp, setOtp] = useState();
    const [counter, setCounter] = useState(90);
    const [hide, setHide] = useState({
        phoneHide: true,
        formHIde: false,
        ButtonText: 'Send Otp'
      
    })
    const [hide1] = useState({
        phoneHide: true,
        formHIde: false,
        ButtonText: 'Resent Otp'
    })
    const [params, setParams] = useState({
        phone: '',
        password: '',
        confirmPassword: ''
    });

    useEffect(() => {
        const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    async function Register() {
        const mobileRegex = /^[0]?[789]\d{9}$/;
        if (hide.ButtonText === 'Send Otp') {
            if (!params.phone) error.push("The Phone Number is required");
            if (params.phone && !mobileRegex.test(params.phone)) error.push("Invalid  Mobile Number");
            if (!_.isEmpty(error)) {
                notify.show(error[0], "error", 1000);
            } else {
                setLoader(true);
                var formdata = new FormData();
                formdata.append("phone", params.phone);
                try {
                    await crud.create('/api/validate_phone/', formdata);
                    setLoader(false);
                    setState(false);
                } catch (e) {
                    setLoader(false);
                }

            }
        }
        if (hide.ButtonText === 'Register me') {
            if (!params.password) error.push("The Password is required");
            if (!params.confirmPassword) error.push("The Confirm Password is required");
            if (!(params.password === params.confirmPassword)) error.push("The Password  are mismatched");
            if (!_.isEmpty(error)) {
                notify.show(error[0], "error", 1000);
            } else {
                try {
                    formdata = new FormData();
                    formdata.append("phone", params.phone);
                    formdata.append("password", params.password);
                    formdata.append("name", params.name);
                    setLoader(true);
                    const {status} = await crud.create('/api/Register/', formdata);
                    setLoader(false);
                    if (status === true) {
                        history.push('/login');
                        setHide({
                            phoneHide: true,
                            formHIde: false,
                            ButtonText: 'Send Otp'
                        });
                    }
                } catch (e) {
                    setLoader(false);
                }
            }
        }
    }
    async function otpsend(){
        const mobileRegex = /^[0]?[789]\d{9}$/;
        if (hide1.ButtonText === 'Resent Otp') {
            if (!params.phone) error.push("The Phone Number is required");
            if (params.phone && !mobileRegex.test(params.phone)) error.push("Invalid  Mobile Number");
            if (!_.isEmpty(error)) {
                notify.show(error[0], "error", 1000);
            } else {
                setLoader(true);
                var formdata = new FormData();
                formdata.append("phone", params.phone);
                try {
                    await crud.create('/api/validate_phone/', formdata);
                    setLoader(false);
                    setState(false);
                } catch (e) {
                    setLoader(false);
                }

            }
        }
    }
    //Otp-Verify
    async function OtpVerify() {
        try {
            setLoader(true);
            var formdata = new FormData();
            formdata.append("phone", params.phone);
            formdata.append("otp", otp);
            const {status} = await crud.create('/api/validate_otp/', formdata);
            setLoader(false);
            if (status === true)
                setState(true);
            setHide({formHIde: true, ButtonText: 'Register me'});
        } catch (e) {
            setLoader(false);
        }
    }
    if(!(_.isEmpty(isAuthenticated))){
        return <Redirect to='/dashboard'/>
    }
    return (
        <>
            <div className="sign-up my-2">
                {state ? <div className={'form'}>
                    <h3 className={'h3'}>Create Account</h3>
                    <SocialLogin/>
                    <p>or use your email for registration</p>
                    {hide.phoneHide ? <><input type={'number'} placeholder="Mobile" name='phone' value={params.phone}
                                               onChange={(e) => {
                                                   const {value: phone} = e.target;
                                                   setParams((params) => ({
                                                       ...params,
                                                       phone,
                                                   }));
                                               }}/></> : <></>}
                    {hide.formHIde ? <>
                        <input type="text" name="name" value={params.name} placeholder="YourName"
                               onChange={(e) => {
                                   const {value: name} = e.target;
                                   setParams((params) => ({
                                       ...params,
                                       name,
                                   }));
                               }}/>
                        <input type="password" name="password" value={params.password} placeholder="Password"
                               onChange={(e) => {
                                   const {value: password} = e.target;
                                   setParams((params) => ({
                                       ...params,
                                       password,
                                   }));
                               }}/>
                        <input name="confirmPassword" value={params.confirmPassword} placeholder="Confirm Password"
                               onChange={(e) => {
                                   const {value: confirmPassword} = e.target;
                                   setParams((params) => ({
                                       ...params,
                                       confirmPassword,
                                   }));
                               }}/>
                    </> : <></>}

                    <Link to={'/login'} onClick={() => {
                        setState(true);
                        history.push('/login');
                    }} className={'d-lg-none'}>Already Have an Account? <span
                        className={'text-primary'}>Sign in</span></Link>
                    <button onClick={() => {
                        Register()
                    }}>{hide.ButtonText}</button>
                </div> : <>
                    <div className={'form'}>
                        <h3 className={'mb-5 h3'}>OTP Verification</h3>
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            inputStyle={{
                                width: "100%",
                                height: "3.5rem",
                                margin: "0 5px",
                                fontSize: "3rem",
                                borderRadius: 4,
                                border: "1px solid rgba(0,0,0,0.3)",
                            }}
                            numInputs={4}
                            separator={<span>-</span>}
                            isInputNum={true}
                        />
                        <Box mt={3} ><Typography fontWeight={500} align="center" color='textSecondary'> Resend OTP in <span style={{color:"green",fontWeight:"bold"}}> 00:{counter}</span> </Typography></Box>
                        <Typography align="center"> 
                        <ThemeProvider theme={theme}>
                        <Button 
                        onClick={() => { otpsend(); }} 
                        color={counter>0 ? 'secondary' : 'primary'}
                        disabled={counter>0}
                        >Resend OTP
                        </Button> 
                        </ThemeProvider>
                        </Typography> 
                        <p className={'my-0'}>Create a new account? <span onClick={() => {
                            setState(true)
                        }} style={{cursor: 'pointer'}} className={'text-primary'}> Sign Up</span></p>
                        <Button onClick={() => {
                            OtpVerify();
                        }} className={'mt-4 py-2'} variant={'contained'} color='primary'>Continue</Button>
                    </div>
                </>}
            </div>
            {loader ? <Loader/> : <></>}

        </>
    )
}