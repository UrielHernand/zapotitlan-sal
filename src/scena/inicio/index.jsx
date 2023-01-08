import React from 'react'
import CardInicio from '../../components/CardInicio'
import CardProductos from '../../components/CardProductos'
import Promocional from '../../components/Promocional'


export default function index() {
  return (
    <>
    <div>
    <CardInicio></CardInicio>

    </div>
    
<div><CardProductos></CardProductos></div>
    
  <div><Promocional></Promocional></div>  
 
  
    </>
   
  )
}
