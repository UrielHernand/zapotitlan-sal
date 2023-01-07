import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import imageProdtos from '../assets/2-productos.png'
import recetario from '../assets/3- recetario.png'
import { Link } from 'react-router-dom';


export default function CardProductos() {
  return (
    <div style={{display:'flex', marginTop:'2%' , width:'95%', justifyContent:'center', marginLeft:'3%'}}>
    <Card sx={{ maxWidth: 1425 }} >
   
      <CardContent>
      <CardMedia
        sx={{ height: 340 }}
        image={imageProdtos}
        title="green iguana"
        style={{objectFit: 'scale-down', width:'80%'}}
      />
        <Typography gutterBottom variant="h5" component="div">
          Sal Oro Blanco
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Tenemos gran variedad de productos,
         disfruta de nuestra amplia gama
          de productos de alta calidad.
        </Typography>
      </CardContent>
      <CardActions >
      <Link to="/producto" style={{textDecoration:'none'}}><Button size="small" color='success'>Ver más Productos</Button></Link>
       
      </CardActions>
    </Card>
    
    <Card sx={{ maxWidth: 1425 }} >
   
      <CardContent>
      <CardMedia
        sx={{ height: 340 }}
        image={recetario}
        title="green iguana"
        style={{objectFit: 'scale-down',width:'94%', justifyContent:'center',marginLeft:'2%' }}
      />
        <Typography gutterBottom variant="h5" component="div">
          PRODUCTOS
        </Typography>
        <Typography variant="body2" color="text.secondary">
       
        Aprende a usar todos los productos que tenemos para ti,
        acompaña tus alimentos y disfruta de todas las ventajas de nuestros productos.
        
        </Typography>
      </CardContent>
      <CardActions>
        
      <Link to="/producto" style={{textDecoration:'none'}}><Button size="small" color='success'>Ver más Productos</Button></Link>
      </CardActions>
    </Card>
    </div>
  );
}