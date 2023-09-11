import React, { useState } from 'react'
import { Box,Input, Button, Typography } from '@mui/material'
import "../App.css"
import styled from '@emotion/styled'
import logo from "../Images/logo.png"
import { NavLink,useNavigate } from 'react-router-dom'
import { log } from '../axios/Routes'
const Box1 =styled(Box)`


align-content:center;
width:40vw;
height:20rem;
background-color:transparent;
border:.2rem solid white;
margin:5rem 25vw ;
border-radius:2rem;
box-shaow:.6rem .6rem .6rem .7rem gray;
@media(max-width:426px){



align-content:center;
width:60vw;
height:20rem;
background-color:transparent;
border:.2rem solid white;
margin:20rem 20vw ;
border-radius:2rem;
box-shadow:.3rem .3rem .3rem   white;
}
`


export default function Login() {
const [email,setEmail] =useState('')
const [password,setPassword] =useState('')
const navigate =useNavigate()
const submit = async(e)=>{
e.preventDefault();
console.log(email,password);

const status = await log(email,password);
if(status===200){
  navigate('/')
}if(status===220){
  navigate('/register')
}
else{
 
  alert('server is not working')
}


}

  return (
    <Box className='loginCoin'>
<Box1>

<img src={logo} alt='auto'style={{height:'2rem',marginLeft:'7rem', marginTop:'1rem'}}/>
<form  onSubmit={submit}>
<Box style={{display:'flex',gap:'.6rem',flexDirection:'row',marginLeft:'2rem'}}>

<Typography style={{fontSize:'1.2rem',marginTop:'.3rem',fontFamily:'cursive',color:'white'}}>Email</Typography>
<Input autoComplete='false' color='primary' type='email' variant='outlined' name='email' placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
</Box>

<Box style={{display:'flex',gap:'.6rem',flexDirection:'row',marginLeft:'2rem',marginTop:'2rem'}}>
<Typography style={{fontSize:'1.2rem',marginTop:'.3rem',fontFamily:'cursive',color:'white'}}>Password</Typography>
<Input autoComplete='false' color='primary' marginLeft={'auto'}  type='password' variant='outlined' name='email' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
</Box>


<Button style={{margin:'2rem 7rem'}} variant='contained'  type='submit'>Login</Button>
<NavLink style={{textDecoration:'none',textAlign:'center'}} to={'/register'}><Typography >Create New Account</Typography> </NavLink>
</form>
</Box1>

    </Box>
  )
}
