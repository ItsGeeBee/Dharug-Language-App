import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { validateEmail, checkPassword } from '../../utils/helpers';
import {Box, Card, Typography, TextField, Alert}  from '@mui/material'
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { createUser } from '../../utils/API';
import Auth from '../../utils/auth';

const SignupForm = (props) => {
    const navigate = useNavigate();
    // set initial form state
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {

        if (!validateEmail(userFormData.email) || !userFormData.username) {
            return setShowAlert(true)
            // We want to exit out of this code block if something is wrong so that the user can correct it
            // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
          }
        if (!checkPassword(userFormData.password)) {
           return setShowAlert(true)
        } 

        try {
            const response = await createUser(userFormData); // functin inside Utils 

            if (!response.ok) {
                throw new Error('something went wrong!');
            }

            const { token, user } = await response.json();
            Auth.login(token);
            props.setIsAuthenticated(true)
            navigate("/dashboard")

        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setUserFormData({
            username: '',
            email: '',
            password: '',
        });
    };


    return (
        <>
     <Box justifyContent="center" alignItems="center" m={10} >
        {showAlert && ( 
     <Alert dismissible onClose={() => setShowAlert(false)} severity="error">Oops! Looks like your details were invalid - <strong>Try again</strong></Alert>)}
        <Card sx={{ minWidth: 275}}>
          <Box justifyContent="center" alignItems="center" m={8}>
            <Stack spacing={2}>
              <Typography variant="h4" color="gray" textAlign="center">
                Username
              </Typography>
              <TextField
                inputProps={{style: {fontSize: 16}}} 
                InputLabelProps={{style: {fontSize: 16}}}
                id="filled-required"
                variant="filled"
                label="Required"
                 type='text'
                 placeholder='Your username'
                 name='username'
                 onChange={handleInputChange}
                 value={userFormData.username}
                 required
              />
            </Stack>
            <Stack marginTop={2} marginBottom={1}>
              <Typography variant="h4" color="gray" textAlign="center ">
                Email Address
              </Typography>
              <TextField
                inputProps={{style: {fontSize: 16}}} 
                InputLabelProps={{style: {fontSize: 16}}}
                 type='email'
                 placeholder='Your email address'
                 name='email'
                 id="filled-required"
                 label="Required"
                 variant="filled"
                 onChange={handleInputChange}
                 value={userFormData.email}
                 required
              />
            </Stack>
            <Stack>
              <Typography
                variant="h4"
                color="gray"
                textAlign="center"
                marginTop={2}
              >
                Password
              </Typography>
              <TextField
              inputProps={{style: {fontSize: 16}}} 
              InputLabelProps={{style: {fontSize: 16}}}
              id="filled-required"
              label="Required"
              variant="filled"
                type='password'
                placeholder='Your password'
                name='password'
                onChange={handleInputChange}
                value={userFormData.password}
                required
              />
            </Stack>
            <Stack spacing={2} marginTop={4}>
              <Button size="large" variant="contained" style={{backgroundColor: '#ffc44a', fontSize: 18, borderColor: 'black', color:'black'}} disabled={!(userFormData.username && userFormData.email && userFormData.password)} onClick={() => {
                handleFormSubmit()
              }}>
                Sign up!
              </Button>
            </Stack>
          </Box>
        </Card>
      </Box>
    </>

    )
};

export default SignupForm;
