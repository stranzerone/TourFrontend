import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';



const Box1 =styled(Box)`
display:flex;
flex-direction:column;
font-size:auto;
text-align:center;
row-overflow:hidden;
text-overflow:ellipsis;
height:15rem;
width:30vw;
box-shadow:.7rem .7rem .7rem .8rem gray;
margin:2rem 2rem;
border-radius:1.2rem;

`
export default function Feeds() {

  
  return (
    <Box style={{background:'aliceBlue',marginTop:'1rem'}}>
    <Typography style={{color:'black',fontSize:'1.3rem',fontWeight:'500',fontFamily:'cursive',textAlign:'center'}}>What Our Travellers <br /> Talk Abour Us</Typography>

   <Box style={{display:'flex',background:'aliceBlue',height:'20rem',textAlign:'center'}}>
  <Box1 >
<Typography color={'blue'}> Sahil</Typography>
<p>and local services. They often include features like interactive maps, language translation,</p>
<Box style={{display:'flex',justifyContent:'center'}}>
<LocationOnIcon color='primary' /> Chicago
</Box>
  </Box1>
  <Box1 >
<Typography  color={'blue'}> ayan</Typography>
<p> These apps  language translation,</p>
<Box style={{display:'flex',justifyContent:'center'}}>
<LocationOnIcon  color='primary'/> Dubai
</Box>
  </Box1>
  <Box1 >
<Typography  color={'blue'}> amanat</Typography>
<p> and local services. They often include features like interactive maps, language translation,</p>
<Box style={{display:'flex',justifyContent:'center'}}>
<LocationOnIcon color='primary' />India
</Box>
  </Box1>
   </Box>
   </Box>
  )
}
