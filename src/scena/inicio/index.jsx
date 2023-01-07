import React from 'react'
import CardInicio from '../../components/CardInicio'
import CardProductos from '../../components/CardProductos'
import Promocional from '../../components/Promocional'
import ShareSocial from '../../components/shareSocial'

export default function index() {
  return (
    <>
    <div>
    <CardInicio></CardInicio>

    </div>
    
<div><CardProductos></CardProductos></div>
    
  <div><Promocional></Promocional></div>  
  <div><ShareSocial></ShareSocial></div>  
  
    </>
   
  )
}
