import React from 'react'
import { ImageList, ImageListItem } from '@material-ui/core'
import { productosEmpresa } from '../../data/Productos'
import ShareSocial from '../../components/shareSocial'
import Box from '@mui/material/Box';

import ImageInicio from '../../assets/1659141914269.jpg'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
export default function Contacto() {
  return (
    <div>
    <Card sx={{ display: 'flex',height:'20%' }} >
      <Box sx={{ display: 'flex', flexDirection: 'column' }} className='card' >
        <CardContent sx={{ flex: '2 0 auto' }}>
        
          <Typography component="div" variant="h3" >
            Sal Oro Blanco
          </Typography>
          
          <Typography  color="text.secondary" component="div" variant="h7" style={{paddingTop:'15%', width:'70%', marginLeft:'10%'}}>
          CONTACTANOS !
          <p>Tu opinion es muy importante para nosotros por lo que abrimos una
linea directa de correo electronico, para que nos cuentes tu 
experiencia o sujerencias.
Tambien puedes enviarnos mensajes si algo igual o similar a estos 
te sucedio:


• Otro comentario del servicio recibido

Envianos tus comentarios al correo electrónico: </p>
 <h4>queremosescucharte@salprehispanica.com</h4>
          </Typography>
         
        </CardContent>
      
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 450 ,height:'40%'}}
        image={ImageInicio}
        alt="Live from space album cover"
      />
    </Card>

    <ShareSocial> </ShareSocial>
      <ImageList sx={{ width: 500, height: 950 }} cols={3} rowHeight={164}>
      {productosEmpresa.map((item) => (
        <ImageListItem key={item.image}>
          <img
            src={`${item.image}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.product}
            loading="lazy"
            style={{objectFit:'cover', heigth:'40%', width:'20%'}}
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  )
}
