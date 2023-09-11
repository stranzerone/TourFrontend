import React, { useEffect, useState } from 'react'
import { Box,Button, Typography,Input, InputAdornment, IconButton} from '@mui/material'
import styled from '@emotion/styled'
import MapIcon from '@mui/icons-material/Map';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Groups2Icon from '@mui/icons-material/Groups2';
import { travels } from '../../axios/Routes';
import {  useNavigate } from 'react-router-dom';
const Box1=styled(Box)`
overflow:auto;
height:6rem;
width:95vw;
margin:1rem 5rem;
background-color:white;
justify-content:'center';
border-radius:2rem;
display:flex;
`
const Text1 = styled(Typography)`
text-align:center;
color:black;
font-size:1.3rem;
margin-left:3rem;
margin-top:1rem;
font-weight:bolder;
@media(max-width:426px){
  font-size:.9rem;
}
`
const Input1= styled(Input)`

`
export default function SearchBar() {
  const navigation =useNavigate()


  const [location,setLocation] = useState('');
  const [checkin,setCheckIn] =useState('');
  const [checkout,setCheckOut] =useState('');
  const [travellers,setTravellers] =useState('')
 const user = localStorage.getItem('user');
 const [status,setStatus] =useState(Number)
 
  const handleSubmit = async(e)=>{
e.preventDefault();
 const dat= await  travels(location,checkin,checkout,travellers,user)
 console.log(dat);
 setStatus(dat)
 if(dat===200){
  navigation('/bookings')
 }
if(dat===500){
 alert('please enter valid details OR Login First')
}else{
  navigation('/login')
}
  }

  

  return (
    <Box style={{width:''}}>
     <form onSubmit={handleSubmit}> 
        <Box1>
       
     <Box style={{display:"flex",flexDirection:'column',justifyContent:'center',borderRight:'.1rem solid gray',width:'14rem',height:'4rem',alignItems:'center',marginTop:'1rem'}}>
    
   <Text1>  Destination</Text1>
   <Input
   style={{width:'8rem', marginLeft:"2rem",fontSize:'.7rem'}}
        placeholder="Enter your location"
        startAdornment={
          <InputAdornment position="start">
            <MapIcon />
          </InputAdornment>
        }
        value={location}
        onChange={(e)=>setLocation(e.target.value)}
      />
  
     
     </Box>

     <Box style={{display:"flex",flexDirection:'column',justifyContent:'center',borderRight:'.1rem solid gray',width:'14rem',height:'4rem',alignItems:'center',marginTop:'1rem'}}>
    
   <Text1>  CHECK IN</Text1>
   <Input
   style={{width:'8rem', marginLeft:"2rem",fontSize:'.7rem'}}
        placeholder="Enter your location"
        type='date'
        startAdornment={
          <InputAdornment position="start">
          <IconButton >
            <CalendarMonthIcon />
            </IconButton>
          </InputAdornment>
        }
        value={checkin}
        onChange={(e)=>setCheckIn(e.target.value)}
      />
    </Box>

    <Box style={{display:"flex",flexDirection:'column',justifyContent:'center',borderRight:'.1rem solid gray',width:'14rem',height:'4rem',alignItems:'center',marginTop:'1rem'}}>
    
    <Text1>  CHECK OUT</Text1>
    <Input
    style={{width:'8rem', marginLeft:"2rem",fontSize:'.7rem'}}
         type='date'
         startAdornment={
           <InputAdornment position="start">
           <IconButton >
             <CalendarMonthIcon />
             </IconButton>
           </InputAdornment>
         }
         onChange={(e)=>setCheckOut(e.target.value)}
         value={checkout}
       />

     </Box>

     <Box style={{display:"flex",flexDirection:'column',justifyContent:'center',borderRight:'.1rem solid gray',width:'14rem',height:'4rem',alignItems:'center',marginTop:'1rem'}}>
    
    <Text1> TRAVELLERS</Text1>
    <Input
    style={{width:'8rem', marginLeft:"2rem",fontSize:'.7rem'}}
         placeholder="Enter your location"
        value={travellers}
         startAdornment={
           <InputAdornment position="start">
           <IconButton >
             <Groups2Icon />
             </IconButton>
           </InputAdornment>
         }
        
         onChange={(e)=>setTravellers(e.target.value)}
       />
     </Box>
     <Button type='submit' variant='contained'>Let's Go</Button>
   
        </Box1>
        </form>
    </Box>
  )
}
