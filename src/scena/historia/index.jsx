import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ImageInicio from '../../assets/Polish_20220603_101110473.png'
import { Button } from '@mui/material';
import { Paper } from '@mui/material'
import Promocional from '../../components/Promocional';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


import history from '../../assets/IMG_0557.jpg'
import polish from '../../assets/Polish_20220603_095053394.png'
import polish2 from '../../assets/Polish_20220603_101110473.png'
import img  from '../../assets/2.jpg'

export default function Historia() {
  return (
    <Paper elevation={16} style={{justifyContent:'center', width:'80%', marginLeft:'10%'}}>
    <div> 
      <h1>Nuestra Hermosa Historia !</h1>
      <Card sx={{ display: 'flex',height:'20%' }} >
      <Box sx={{ display: 'flex', flexDirection: 'column' }} className='card' >
        <CardContent sx={{ flex: '2 0 auto' }}>
        
          <Typography component="div" variant="h3" >
            Sal Oro Blanco
          </Typography>
          
          <Typography  color="text.secondary" component="div" variant="h5" style={{paddingTop:'15%', paddingLeft:'18%', width:'70%'}}>
          Historia
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center',  pb: 20 }} style={{justifyContent:'center',}}>
         
       
          <Button variant="contained" color='success' size='large'> <KeyboardArrowRightIcon > </KeyboardArrowRightIcon> Conocerla!</Button>
          
        
       
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 550 ,height:'90%'}}
        image={ImageInicio}
        alt="Live from space album cover"
      
      />
    </Card>
    <div style={{width:'90%'}}>
    <h2>Historia</h2>
    <Promocional></Promocional>
 
    </div>

    <div style={{justifyContent:'center', display:'flex'}}>
   
   <ImageList sx={{ width: 800, height: 650 }}>
   <div style={{width:'80%'}}>
   <h1>Historia</h1>
       <p> <h3>Inicia Nuestra Historia!</h3>“Sal prehispánica” es una cooperativa de vecinos del pueblo de Zapotitlán Salinas en el estado de Puebla. Tiene origen en la explotación salinera de las casas nobiliarias indígenas, en la época prehispánica fue explotada por el señorío de chocholteco de Zapotitlán, un territorio perteneciente al reino de la Mixteca.</p>
   </div>

     {itemData.map((item) => (
       <ImageListItem key={item.img}>
         <img
           src={`${item.img}?w=248&fit=crop&auto=format`}
           srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
           alt={item.title}
           loading="lazy"
         />
         <ImageListItemBar
           title={item.title}
           subtitle={<span>by: {item.author}</span>}
           position="below"
         />
       </ImageListItem>
     ))}
     <div style={{width:'80%', marginLeft:'5%'}}>
   
       <p> <h3> Nuestra Historia!</h3>En el siglo XVI, mediante los pactos entre la nobleza y la corona, se acordó su explotación a cargo de casa reinante de Zapotitlán, quienes tomaron el apellido Pacheco.</p>
   </div>

   {itemData1.map((item) => (
       <ImageListItem key={item.img}>
         <img
           src={`${item.img}?w=248&fit=crop&auto=format`}
           srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
           alt={item.title}
           loading="lazy"
         />
         <ImageListItemBar
           title={item.title}
           subtitle={<span>by: {item.author}</span>}
           position="below"
         />
       </ImageListItem>
     ))}


      <div >
        <p> <h3> Nuestra Historia!</h3> Así pues, las salinas permanecieron bajo el dominio indígena, a pesar de que la explotación de las salinas se consideró un derecho exclusivo del rey. con las leyes de desamortización, la familia pacheco no pudo preservar la propiedad de las familias y fueron vendidas a los vecinos del común de Zapotitlán quienes la explotaban de manera privada. </p>
      </div>
     <div style={{width:'80%'}}>

       <p> <h3> Nuestra Historia!</h3>La empresa “Sal prehispánica” se fundó en …. Con la organización de los salineros para su comercialización.  Y fue impulsada por el apoyo de varias agrupaciones tanto nacionales como internacionales, por ejemplo: 
La calidad de la sal..</p>
   </div>

  
   </ImageList>
   </div>


    
    </div>
    </Paper>
  )
}
const itemData = [
  

  {
    img: history,
    title: 'Historia',
    author: 'Zapotitlan Salinas ',
  },
  {
    img: polish,
    title: 'Historia',
    author: 'Zapotitlan Salinas ',
  },
 
];
const itemData1 = [
  
  {
    img: polish2,
    title: 'Historia',
    author: 'Zapotitlan Salinas ',
  },
  {
    img: img,
    title: 'Historia',
    author: 'Zapotitlan Salinas ',
  },
 
];

