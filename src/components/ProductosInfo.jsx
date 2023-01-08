import { Paper } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ImageInicio from '../assets/photo4967635101441698372.jpg'
import { Button } from '@mui/material';
import ArrayProductos from './ArrayProducts';

export default function ProductosInfo() {
  return (
    <Paper elevation={16} style={{justifyContent:'center', width:'80%', marginLeft:'10%'}}>
    <div> 
      <h1>Nuestros Productos</h1>
      <Card sx={{ display: 'flex',height:'20%' }} >
      <Box sx={{ display: 'flex', flexDirection: 'column' }} className='card' >
        <CardContent sx={{ flex: '2 0 auto' }}>
        
          <Typography component="div" variant="h3" >
            Sal Oro Blanco
          </Typography>
          
          <Typography  color="text.secondary" component="div" variant="h5" style={{paddingTop:'15%', paddingLeft:'18%', width:'70%'}}>
          PRODUCTOS DE ALTA CALIDAD!
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center',  pb: 20 }} style={{justifyContent:'center',}}>
         
       
          <Button variant="contained" color='success' size='large'> <KeyboardArrowRightIcon > </KeyboardArrowRightIcon> Ver los productos</Button>
          
        
       
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 450 ,height:'40%'}}
        image={ImageInicio}
        alt="Live from space album cover"
      />
    </Card>
    <div style={{width:'90%'}}>
    <h2>Productos!</h2>
    <ArrayProductos></ArrayProductos>
    </div>


    
    </div>
    </Paper>
  )
}
