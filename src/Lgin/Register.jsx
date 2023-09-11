import React, { useState } from 'react'
import { Box,Input, Typography, Button } from '@mui/material'
import '../App.css'
import styled from '@emotion/styled'
import {reg} from "../axios/Routes"
import { NavLink, useNavigate } from 'react-router-dom'


const Box1 =styled(Box)`

gap:2rem;
width:27rem;
height:20rem;
background-color:transparent;
border:.2rem solid white;
margin:5rem 0rem 0 20rem;
border-radius:2rem;
box-shaow:.6rem .6rem .6rem .7rem gray;

@media(max-width:426px){
   margin-left:1vw;
   margin-top:20vh;

    width:70vw;
    height:50vh;
}

`

const Box2 =styled(Box)`
display:flex;
margin-top:1rem;
margin-left:1rem;



`

const Text2 =styled(Typography)`
font-size:1.3rem;
color:black;
font-weight:600;
font-family:cursive;
@media(max-width:426px){
    color:white;
    font-size:2rem;
}
`


export default function Register() {
    const [name,setName] =useState('');
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');
    const [mobile,setMobile] =useState('');
const navigate = useNavigate()
const submit =(e)=>{
e.preventDefault()
    console.log("hello",name,email,password,mobile)
const status = reg(name,email,password,mobile)
if(status===200){
    navigate('/login')
}if(status===404){
    alert('emai id aleredy registerd')
}if(status===500){
alert('server is not working')
}
}


  return (
    <div className='regCoin'>
    <Box style={{margin:'1vw '}}>
     <NavLink to={'/login'}><Button   variant='contained'>Login</Button> </NavLink>   
</Box>

    <Box1>
    
    <form  onSubmit={submit}>
    <Box2 style={{display:'flex'}}>
        <Text2>FULL NAME</Text2>
         <Input placeholder='Full Name' value={name} onChange={(e)=>setName(e.target.value)} />
    </Box2>
    <Box2 style={{display:'flex'}}>
        <Text2>Email</Text2>
         <Input placeholder='Email' type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </Box2>
    <Box2 style={{display:'flex'}}>
        <Text2>Mobile Number</Text2> 
         <Input placeholder='Mobile Number' value={mobile} type='phone number' onChange={(e)=>setMobile(e.target.value)}/>
    </Box2>
    <Box2 style={{display:'flex'}}>
        <Text2>Password</Text2>
         <Input placeholder='Password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
    </Box2>
<Button type='submit' style={{marginLeft:'8rem',marginTop:'1rem'}} variant='contained'>Register</Button>
</form>
    </Box1>

    </div>
  )
}
