import * as React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ImageInicio from '../assets/1- nuestra historia.png'
import { Button } from '@mui/material';
import css from '../css/CardInicio.css'


export default function CardInicio() {


  return (
    <Card sx={{ display: 'flex',height:'20%' }} >
      <Box sx={{ display: 'flex', flexDirection: 'column' }} className='card' >
        <CardContent sx={{ flex: '2 0 auto' }}>
        
          <Typography component="div" variant="h3" >
            Sal Oro Blanco
          </Typography>
          
          <Typography  color="text.secondary" component="div" variant="h5" style={{paddingTop:'15%', paddingLeft:'18%', width:'70%'}}>
          Somos una empresa productora
de sal de Zapotitlan Salinas, 
orgullosamente Mexicana, que
vende productos derivados de la
sal, productos de origen natural
y de calidad premium.
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center',  pb: 20 }} style={{justifyContent:'center',}}>
         
       
          <Button variant="contained" color='success' size='large'> <KeyboardArrowRightIcon > </KeyboardArrowRightIcon> Conocenos más!</Button>
          
        
       
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 450 ,height:'30%'}}
        image={ImageInicio}
        alt="Live from space album cover"
      />
    </Card>
  );
}