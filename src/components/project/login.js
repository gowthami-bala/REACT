
import { Button, Card, CardContent, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import InputAdornment from '@mui/material/InputAdornment';
import validator from 'validator';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
// import Data from "../data";
import Home from "./main";
// import { useNavigate } from "react-router-dom";
const Login = () => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [passwordType, setpasswordType] = useState('password');
    const [nameError, setnameError] = useState('');
    const [nav, setnav] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();
        if (username.length === 0) {
            console.log(username.length);
            setnameError(true)
        }
        else if (validator.isStrongPassword(password, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            // console.log(username, password);
            setErrorMessage('')
            setnav(true)
        } else {
            setErrorMessage('Is Not Strong Password')
        }
    }

    const togglePassword = () => {
        if (passwordType === "password") {
            setpasswordType('text')
        } else {
            setpasswordType('password')
        }
    }
    // const onforget=()=>{

    // }
    return (
        <>
            {nav === true ? <Home
                username={username}
                password={password}></Home> :
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Card style={{ marginTop: "100px", width: '50%', borderRadius: '10px' }}>
                        <CardContent>
                            <h2>Login</h2>
                            <FormControl >
                                <div style={{ marginTop: "50px" }}>
                                    <TextField label="UserName"
                                        onChange={(e) => setusername(e.target.value)}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccountCircle fontSize="small" />
                                                </InputAdornment>
                                            ),
                                        }}></TextField>
                                </div>
                                {nameError === '' ? null : <span style={{ color: 'red' }}>Enter username</span>}
                                <br />
                                <div>
                                    <TextField style={{ marginLeft: "60px" }} type={passwordType} label="password" onChange={(e) => setpassword(e.target.value)}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <LockIcon fontSize="small" />
                                                </InputAdornment>
                                            ),
                                        }}></TextField>
                                    <Button style={{ marginTop: "10px", color: "rgba(0, 0, 0, 0.54)", backgroundColor: "none" }} onClick={togglePassword}>
                                        {passwordType === "password" ? <VisibilityOffIcon fontSize="small" /> : <VisibilityIcon fontSize="small" />}
                                    </Button>
                                </div>
                                {errorMessage === '' ? null :
                                    <span style={{ color: 'red' }}>{errorMessage}</span>}<br />

                                <div>
                                    <Button onClick={onSubmit} variant="contained"> Login </Button>&nbsp;
                                    {/* <Button onClick={onforget} variant="text">Forget password?</Button> */}
                                </div>

                            </FormControl>
                        </CardContent>
                        
                    </Card>
                </div>}

        </>
    )
}

export default Login