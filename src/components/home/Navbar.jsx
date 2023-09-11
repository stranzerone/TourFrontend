import React, { useEffect, useState } from 'react'
import {Box, Button, Grid, Typography,List,ListItem, IconButton,Drawer} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@emotion/styled'
import logo from "../../Images/logo.png"
import { NavLink, useNavigate } from 'react-router-dom'
import './Home.css'

const GridS =styled(Grid)`
display:flex;
justify-content:center;
font-size:.9rem;
margin:0 6rem;

font-weight:700;
column-gap:4rem ;


`
const Navbar = styled(Box)`
display:flex;
@media(max-width:426px){
display:none;
color:black;

}

`

const Text1=styled(Typography)`
display:flex;
font-size:.9rem;
color:white;
font-weight:700;


@media(max-width:426px){
  color:black;
}
`
const MenuButton=styled(IconButton)`
display:none;
@media(max-width:426px){
  display:block;
margin-left:60vw;
height:2rem;
width:2rem;
 
 
}

`
const StyledDrawer= styled(Drawer)`
height:60vh;
width:20vw;
background-color:wheat;

`

export default  function() {
  const[us,setUs] =useState('');
  const user = localStorage.getItem('user');
  const [open,setOpen] =useState(false)

 const navigate =useNavigate()
  const logout =()=>{
    localStorage.removeItem('user');
    navigate('/')

  }


const list2=()=>(
  <List>

    <ListItem>
    <Box display={'block'}><Typography>hello</Typography><Typography>Bye</Typography></Box>

    </ListItem>
  </List>
)
  const list =()=>(
    <Box style={{display:"flex",flexDirection:'column',gap:'4rem'  ,width:"13rem",height:"50vh",gap:'4rem'}}>
        <List>
          <ListItem >
         <NavLink style={{textDecoration:'none'}} to={'/'}> <Text1>Home</Text1> </NavLink>
        </ListItem>
       <ListItem>
    <NavLink  to={"/locations"}  style={{textDecoration:'none'}}>  <Text1>Destination</Text1></NavLink>
    </ListItem>
    <ListItem>
    <NavLink to={'/bookings'}  style={{textDecoration:'none'}}> <Text1>My Bookings</Text1> </NavLink>
    </ListItem>
    <ListItem>
    <NavLink to={'/gallery'} style={{textDecoration:'none'}}> <Text1>Gallery</Text1> </NavLink>
    </ListItem>
    <ListItem>
 
    <NavLink   style={{textDecoration:'none'}}> <Text1>Contact US</Text1> </NavLink>
    </ListItem>

 
 
<ListItem>
  {user?<Button onClick={logout} style={{fontSize:'auto',display:'flex',justifyContent:'right'}} variant='outlined'>{user}</Button>: <NavLink to={"/login"}><Button variant='outlined' color='primary' >Sign In</Button> </NavLink>}
</ListItem>
   
   

           
        </List>
    </Box>

)

  return (
    <Box display={'flex'}>
     <Box style={{display:'flex',justifyContent:"start",marginLeft:'1rem'}}>
    <img src={logo} alt='auto' style={{width:'4rem', height:'4rem'}} />
    <Typography style={{color:'white',fontWeight:'700'}} >Travellers</Typography>
    <MenuButton  aria-label='sahil' onClick={()=>{setOpen(true)}}>
   
    <MenuIcon variant='contained' color='error' style={{fontSize:'2rem'}} />


    </MenuButton>
    <StyledDrawer    aria-label='sahil' open={open} onClose={()=>{setOpen(false)}}>
                        {list()}
           </StyledDrawer>
    </Box>
    <Navbar>
   
  <GridS  className='nav' >
   
  
   <NavLink style={{textDecoration:'none'}} to={'/'}> <Text1>Home</Text1> </NavLink>
   <NavLink  to={"/locations"}  style={{textDecoration:'none'}}>  <Text1>Destination</Text1></NavLink>

   <NavLink to={'/bookings'}  style={{textDecoration:'none'}}> <Text1>My Bookings</Text1> </NavLink>

   <NavLink to={'/gallery'} style={{textDecoration:'none'}}> <Text1>Gallery</Text1> </NavLink>


   <NavLink   style={{textDecoration:'none'}}> <Text1>Contact US</Text1> </NavLink>



  </GridS>
  <Box>
 {user?<Button onClick={logout} style={{fontSize:'auto',display:'flex',justifyContent:'right'}} variant='outlined'>{user}</Button>: <NavLink to={"/login"}><Button variant='outlined' color='primary' >Sign In</Button> </NavLink>}

  </Box>
  
  </Navbar>
  </Box>
  )
}
