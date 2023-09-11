import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import styled from '@emotion/styled'
import PublicIcon from '@mui/icons-material/Public';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import HouseboatIcon from '@mui/icons-material/Houseboat';
import Diversity1Icon from '@mui/icons-material/Diversity1';
const Text1 = styled(Typography)`
font-size:2rem;
text-wrap:wrap;
color:white;
font-weight:700;
@media(max-width:426px){
  font-size:1rem;
}
`
const Box1 =styled(Box)`
display:flex;
flex-direction:column;
height:10rem;
width:23vw;
border:.3rem solid white;
border-radius:1rem;
margin-top:1rem;
`
const Text2= styled(Typography)`
font-size:1.6rem;
margin-left:1rem;
color:white;
font-weight:700;
@media(max-width:426px){
  
  font-size:1rem;
}
`

export default function Midsection() {
  return (
 <div style={{display:'grid',gridTemplateColumns:"50vw 50vw"}}>
    <div style={{textAlign:'center'}}>
<Text1>WE ARE THE BUDDIES TO MAKE YOUR TOUR THE BEST</Text1>
<p style={{color:'white'}}>Let Begin The Tour Of ypur Dreams In the World Of Dreams</p>
<Button style={{borderRadius:'1rem',color:'white',marginTop:'3rem'}} color='primary' variant='outlined'>Get Started</Button>
    </div>
    <div style={{display:'grid',gridTemplateColumns:'50% 50%'}}>
    <Box1>
    <PublicIcon style={{color:'white',fontSize:'3rem'}}/>
    <Text2>35+ COUNTRIES</Text2>

    </Box1>
    <Box1>
<AddLocationAltIcon style={{fontSize:'3rem',color:'white'}}/>
<Text2>1000+ Destination Point</Text2>
</Box1>
 <Box1>
<HouseboatIcon style={{fontSize:'3rem',color:'white'}}/>
<Text2>4000+ Hotels TO CheckIn</Text2>
</Box1>
 <Box1>
<Diversity1Icon style={{fontSize:'3rem',color:'white',marginLeft:'1rem'}}/>
<Text2>2.1M Customers</Text2>
</Box1>

    </div>
 </div>
  )
}
