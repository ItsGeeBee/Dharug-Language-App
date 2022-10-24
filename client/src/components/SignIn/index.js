import React, { useState } from 'react';
import {Box, Card, Typography, TextField, Alert, Button, Stack}  from '@mui/material'
import { validateEmail, checkPassword } from '../../utils/helpers';
import { useNavigate } from "react-router-dom";
import { loginUser } from '../../utils/API';
import Auth from '../../utils/auth';

const SignIn = (props) => {
    const navigate = useNavigate();
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        
        // validation to check email address when signing in
        if (!validateEmail(userFormData.email)) {
            return setShowAlert(true)
          }

        try {
            const response = await loginUser(userFormData);
            if (!response.ok) {
                throw new Error('something went wrong!');
            }

            const { token, user } = await response.json();
            Auth.login(token);
            props.setIsAuthenticated(true)
            navigate("/dashboard")// actions landing page post event

        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setUserFormData({
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
            <Stack marginTop={2} marginBottom={1}>
              <Typography variant="h4" color="gray" textAlign="center ">
                Email Address
              </Typography>
              <TextField
                inputProps={{style: {fontSize: 18}}} 
                InputLabelProps={{style: {fontSize: 18}}}
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
              inputProps={{style: {fontSize: 18}}} 
              InputLabelProps={{style: {fontSize: 18}}}
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
              <Button size="large" variant="contained" style={{backgroundColor: '#ffc44a', fontSize: 18, borderColor: 'black', color:'black'}} disabled={!(userFormData.email && userFormData.password)} onClick={() => {
                handleFormSubmit()
              }}>
                Sign In!
              </Button>
            </Stack>
          </Box>
        </Card>
      </Box>
    </>

    );
};

export default SignIn;
