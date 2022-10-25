import React, {useEffect} from 'react';
// import { loadStripe } from '@stripe/stripe-js';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styled from '@emotion/styled'
import { Box, Typography } from "@mui/material";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {donation} from '../../utils/API'
import "./style.css";
import { createTheme } from '@mui/material/styles';
import { positions } from '@mui/system';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f9a825',
    },
    secondary: {
      main: '#c62828',
  },
}
});

const useStyles = styled((theme) => ({
  iconWrapper: {
    backgroundColor: theme.palette.background.emphasis,
  },
  midColumn: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(4)
    }
  }
}));

export default function Contact(props) {
  const classes = useStyles();

  const content = {
    'header': 'We respect and honour',
    'description': 'Aboriginal and Torres Strait Islander Elders past, present and future. We acknowledge the stories, traditions and living cultures of Aboriginal and Torres Strait Islander peoples on this land and commit to building a brighter future together.',
    'contact1': 'Address',
    'contact1-desc1': '61 Yarra Street',
    'contact1-desc2': ' Willowvale, Victoria, 3360',
    'contact2': 'Email',
    'contact2-desc': 'info@dharug.com',
    'contact3': 'Follow Us',
    'contact4': 'Phone',
    'contact4-desc': '(03) 5340 5993',
    ...props.content
  };


  // useEffect(() => {
  //   const handleDonation = async () => { 
  //     try { 
  //       const response = await donation()
  //       console.log(response)

  //       res.redirectToCheckout({ sessionId: data.checkout.session });
        
  //     } catch {
  //       console.log('no dice!')

  //     }
  //   }
  // }, []);

  const handleDonation = async () => { 
    try { 
      const response = await donation()
      console.log(response)

      // res.redirectToCheckout({ sessionId: data.checkout.session });
      
    } catch {
      console.log('no dice!')

    }
  }

  return (


    <section>
       <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        // minHeight: '20vh',
        
      }} >
      
        <Box  component="footer"
        sx={{
          py: 3,
          px: 3,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}>
           <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" component="h2" gutterBottom={true}>{content['header']}</Typography>
              <Typography variant="subtitle1" color="textSecondary" paragraph={true}>{content['description']}</Typography>
              <Button onClick={() => handleDonation()} variant="contained" >Donate</Button>
                {/* href="https://donate.stripe.com/6oE02s4q6fR4cz6000" */}
            </Grid>
            <Grid item xs={12} sm={6} md={4} >
              <div className={classes.midColumn}>
                <Box display="flex" mb={3} justifyContent="center" alignItems="center" >
                  <div>
                    <Avatar className={classes.iconWrapper}>
                      <RoomIcon color="primary" fontSize="12" />
                    </Avatar>
                  </div>
                  <Box ml={2}>
                    <Typography variant="h6" gutterBottom={true}>{content['contact1']}</Typography>
                    <Typography variant="body2" color="textSecondary">{content['contact1-desc1']}</Typography>
                    <Typography variant="body2" color="textSecondary">{content['contact1-desc2']}</Typography>
                  </Box>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center" mr={4} >
                  <div>
                    <Avatar className={classes.iconWrapper}>
                      <EmailIcon color="primary" fontSize="12" />
                    </Avatar>
                  </div>
                  <Box ml={2}>
                    <Typography variant="h6" gutterBottom={true}>{content['contact2']}</Typography>
                    <Typography variant="body2" color="textSecondary">{content['contact2-desc']}</Typography>
                  </Box>
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex" mb={3}>
                <div>
                  <Avatar className={classes.iconWrapper}>
                    <WebAssetIcon color="primary" fontSize="12" />
                  </Avatar>
                </div>
                <Box ml={2}>
                  <Typography variant="h6" gutterBottom={true}>{content['contact3']}</Typography>
                  <IconButton href="#" color="inherit">
                    <FacebookIcon />
                  </IconButton>
                  <IconButton href="#" color="inherit">
                    <TwitterIcon />
                  </IconButton>
                  <IconButton href="#" color="inherit">
                    <LinkedInIcon />
                  </IconButton>
                </Box>
              </Box>
              <Box display="flex">
                <div>
                  <Avatar className={classes.iconWrapper}>
                    <PhoneIcon color="primary" fontSize="12" />
                  </Avatar>
                </div>
                <Box ml={2}>
                  <Typography variant="h6" gutterBottom={true}>{content['contact4']}</Typography>
                  <Typography variant="body2" color="textSecondary">{content['contact4-desc']}</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          </Container>
        </Box>
      </Box>
    </section>
  );
}