import * as React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';


import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { green, } from '@mui/material/colors';

import {productosEmpresa} from '../data/Productos'

import MoreVertIcon from '@mui/icons-material/MoreVert';
import arraproduct from '../css/ArrayProducts.css';
import { Paper } from '@mui/material';



export default function ArrayProductos() {
  

  return (
    <>

<div className='slider-container1'>
<div className='slider-container'>{
    productosEmpresa.map((producto)=> 
    <Paper  className='paper' elevation={10}>

    <Card sx={{ maxWidth: 645,  }} key={Math.round()}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:green[900]}} aria-label="recipe">
            S
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Zapotitlan Salinas"
        subheader="2023"
      />
      <div className='CardMedia'>
      <CardMedia
        component="img"
        sx={{maxWidth: 135}}
        image={producto.image}
        alt="Paella dish"
        

      />
      </div>
      <CardContent className='CardContent'>
      <h4>{producto.product}</h4>
        <Typography variant="body2" color="text.secondary">
          {producto.descripción}
        </Typography>
      </CardContent>
      
      
    </Card>
 
    </Paper> 


    )
}

</div>
</div>
    </>
  );
}