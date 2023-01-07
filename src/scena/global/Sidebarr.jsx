import React from 'react'
import { useState } from "react";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'

import { Box, IconButton, Typography,} from '@mui/material'

/* import {Link}  from 'react-router-dom' */
import Logo from '../../assets/logo.png'

import { PersonOutlined } from '@mui/icons-material'
import { Link } from "react-router-dom"
import { MenuOutlined } from '@mui/icons-material'
import { ProSidebarProvider } from 'react-pro-sidebar';
import CottageIcon from '@mui/icons-material/Cottage';
import TimelineIcon from '@mui/icons-material/Timeline';
import CategoryIcon from '@mui/icons-material/Category';
import ContactsIcon from '@mui/icons-material/Contacts';


const Item= ({title,to,icon, selected,setSelected }) => {

  return (
    <MenuItem
      active={selected === title}
      style={{
        color:'#09400F'
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
    
      <Link to={to} style={{textDecoration:'none',color:'#09400F'}}><Typography>{ title}</Typography></Link>
     

    </MenuItem>
  );

  };

export default function Sidebarr() {
 

  
const [isCollapsed ,setIsCollapsed] = useState(false);
const [selected,setSelected] = useState('inicio');

const logo = Logo;
  

  return (
   
    <Box
      sx={{
        width: 300 ,
        "& .pro-sidebar-inner": {
          background: 'white',
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
    
<ProSidebarProvider collapsed={isCollapsed}>
 
<Sidebar  style={{backgroundColor:'white', position:'fixed'}} >

        <Menu iconShape="square" >
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => {
              setIsCollapsed(!isCollapsed) 
               }
             }
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: '#b12d52',
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" >{/* color={colors.grey[100]} */}
                  sal
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
             
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={logo}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h4"
                 
                  fontWeight="bold"
                  sx={{ m: "6px 0 0 0" }}
                > {/* color={colors.grey[100]} */}
                  Sal Oro Blanco
                </Typography>
                <Typography variant="h5" >{/* color={colors.greenAccent[500]} */}
                  Sal prehispánica
                </Typography>
              </Box>
            </Box>
          )}

          <Box>
            

            <Typography
              variant="h6"
               
              sx={{ m: "15px 0 5px 20px" }}
            >
              Secciones
            </Typography>
            <Item
              title="Inicio"
              to="/" 
              icon={<CottageIcon />}
              selected={selected}
              setSelected={setSelected}
              
            />
            <Item
              title="Historia"
              to="/historia"
              icon={<TimelineIcon />}
              selected={selected}
              setSelected={setSelected}
           
            />
            
            <Item
              title="Productos"
              to="/producto"
              icon={<CategoryIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed = {isCollapsed}
            />
             <Item
              title="Contacto"
              to="/contacto"
              icon={<ContactsIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed = {isCollapsed}
            />

            <Typography
              variant="h6"
               
              sx={{ m: "15px 0 5px 20px" }}
            >
              Tiendas
            </Typography>
            <Item
              title="+ Tiendas"
              to="/tienda"
              icon={<PersonOutlined />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed = {isCollapsed}
            />
            
           

            <Typography
              variant="h6"
               
              sx={{ m: "15px 0 5px 20px" }}
            >
              Sal de oro
            </Typography>
           
           
           
           
          
          </Box>
        </Menu>
      </Sidebar>
      </ProSidebarProvider>
     

    </Box>

    
    
    
    
    
   
    
  )
}
