
import './App.css';
import Sidebarr from './scena/global/Sidebarr';
import Topbar from './scena/global/Topbar';
import { Route, Routes } from "react-router-dom";
import Contacto from "./scena/contacto";
import Productos from "./scena/productos";
import Inicio from "./scena/inicio"
import Historia from  "./scena/historia"
import Tienda from './scena/tienda/Tienda';


function App() {
  
  return (
    <div className="App">
    <Sidebarr  />
      <main className='content'>
      <Topbar></Topbar>
      <Routes>
              <Route path="/" element={<Inicio/>}/>
              <Route path="/historia" element={<Historia/>}/>
              <Route path="/contacto" element={<Contacto/>}/>
              <Route path="/producto" element={<Productos/>}/>
              <Route path="/tienda" element={<Tienda></Tienda>}/>
              
      </Routes>
     


      </main>
      
   
 
    </div>
  );
}

export default App;
