import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import tienda1 from '../../assets/1659141914269.jpg'
import tienda4 from '../../assets/278938211_1666333627041050_3699500516798713325_n.jpg'
import tienda3 from '../../assets/cuidado-de-ojos.png'
import tienda2 from '../../assets/1659142104661.jpg'

export default function Tienda() {
  return (
    <div style={{justifyContent:'center', display:'flex'}}>
   
    <ImageList sx={{ width: 800, height: 650 }}>
    <div style={{width:'80%'}}>
    <h1>Tiendas</h1>
        <p> <h3>Holaa!</h3>Pensando en llegar a más clientes y brindarte
nuestros productos prémium nuestra empresa
ha abierto distintas sucursales y se ha unido
con más cadenas comerciales para poder estar
más cerca de ti, es por ello que nos aliamos
y ahora puedes encontrarnos en las 
siguientes tiendas:</p>
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
    </ImageList>
    </div>
  );
  
}

const itemData = [
  
  {
    img: tienda1,
    title: 'Sal-oro-blanco',
    author: '@sal-Oro-Blanco',
  },
  {
    img:tienda2,
    title: 'Sal-oro-blanco',
    author: '@sal-oro-blanco',
  },
  {
    img: tienda3,
    title: 'Cuidado de los ojos',
    author: '@cuidado de los ojos ',
  },
  {
    img: tienda4,
    title: 'Organic',
    author: '@Organic',
  },

];