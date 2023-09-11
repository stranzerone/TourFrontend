import React, { useState } from 'react'
import Children from './Children'
import Solo from './Solo'
import Friend from './Friend'
import Family from './Family'
import { Button,Box } from '@mui/material'
import styled from '@emotion/styled'


const Box1= styled(Box)`
display:flex;
height:30rem;
width:100vw;
background-color:aliceBlue;
border-radius:'.8rem';

@media(max-width:426px){
    display:flex;
    flex-direction:column;

}
`
const Box2 = styled(Box)`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
justify-content:center;
margin-top:5rem;
gap:2rem;
width:30vw;
@media(max-width:426px){

    display:flex;
    background-color:aliceBlue;
    width:100vw;
    flex-direction:row;
    margin:1rem 1rem;
    
}
`

export default function () {
    const [solo,setSolo] =useState(true);
    const [friend,setFriend] =useState(false);
    const [family,setFamily] =useState(false);
    const [children,setChildren] =useState(false);


const handle1=()=>{

    setFriend(false);
    setFamily(false);
    setChildren(false);
    setSolo(true);

}
const handle2=()=>{

    setFriend(false);
    setFamily(false);
    setChildren(true);
    setSolo(false);

}

const handle3=()=>{

    setFriend(false);
    setFamily(true);
    setChildren(false);
    setSolo(false);

}

const handle4=()=>{

    setFriend(true);
    setFamily(false);
    setChildren(false);
    setSolo(false);

}





  return (
    <Box1 >

    <Box2 >
    <Button onClick={handle1} variant='outlined'  color='error' style={{borderRadius:'1rem'}}>SOLO</Button>
    <Button  onClick={handle2} variant='outlined' style={{borderRadius:'1rem'}}>Children</Button>
    <Button  onClick={handle3} variant='outlined' color='success' style={{borderRadius:'1rem'}}>Family</Button>
    <Button  onClick={handle4} variant='outlined' color='warning' style={{borderRadius:'1rem'}}>Friends</Button>

    </Box2>

<Box>
    
   {solo? <div style={{width:'70%'}}><Solo/></div>:null}
   {children? <div style={{width:'70%'}}><Children/></div>:null}
   {family? <div style={{width:'70%'}}><Family/></div>:null}
   {friend? <div style={{width:'70%'}}><Friend/></div>:null}
   </Box>
    </Box1>
  )
}
