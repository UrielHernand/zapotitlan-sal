
  import React, { useState } from 'react';
  import Button from '@material-ui/core/Button';
  import { Paper } from '@mui/material';
  import FacebookIcon from '@mui/icons-material/Facebook';
  import YouTubeIcon from '@mui/icons-material/YouTube';
  import InstagramIcon from '@mui/icons-material/Instagram';
  import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';

  export default function ShareSocial  ()  {
    const [open, setOpen] = useState(false);
    return (
      <>
      <h2>Redes Sociales Y Contacto</h2>
      <Paper elevation={18} style={{width:'80%', marginLeft:'10%',paddingTop:'5%', paddingBottom:'5%'}}>
      <div style={{ display:'flex', justifyContent:'space-evenly' , width:'100%'}}>


       <Paper elevation={12}><Button onClick={() => setOpen(true)}><FacebookIcon color='primary'></FacebookIcon>Facebook</Button></Paper> 
       <Paper elevation={12}><Button onClick={() => setOpen(true)}><YouTubeIcon color='error'></YouTubeIcon>Youtube</Button></Paper> 
    
      
      
      <Paper elevation={12}><Button onClick={() => setOpen(true)}><InstagramIcon color='info'></InstagramIcon>Instagram</Button></Paper> 
      <Paper elevation={12}><Button onClick={() => setOpen(true)}><SwitchAccountIcon color='success'></SwitchAccountIcon>Wattshapp</Button></Paper> 


    
        </div>

      
        </Paper>
      <p style={{fontStyle: 'italic'}}>🖇Dev2023🖇</p>
      </>
    );
  };
