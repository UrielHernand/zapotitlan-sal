
import './App.css';
import Sidebarr from './scena/global/Sidebarr';
import Topbar from './scena/global/Topbar';
import { Route, Routes } from "react-router-dom";
import Contacto from "./scena/contacto";
import Productos from "./scena/productos";
import Inicio from "./scena/inicio"
import Historia from  "./scena/historia"


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
              
      </Routes>
     


      </main>
      
   
 
    </div>
  );
}

export default App;
