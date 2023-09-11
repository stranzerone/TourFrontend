import React from 'react'
import "../../App.css"
import { Box, Typography } from '@mui/material'
import styled from '@emotion/styled'

const Text3=styled(Typography)`
display:felx;
color:aliceBlue;
font-size:7rem;
font-weight:700;
text-align:center;
margin-top:10rem;
margin-left:20vw;
font-family:cursive;
text-shadow:.4rem .4rem .2rem  white;



`
export default function Locations() {
  return (
    <div className='locationCoin'>
    <Typography style={{fontFamily:'cursive',fontSize:'1.2rem',fontWeight:'600',borderBottom:'.2rem solid black',marginLeft:'2rem'}}>Top Locations Of 2023</Typography>
<Box className='india'><Text3 >INDiA</Text3></Box>
<Box className='image'><Text3 >America </Text3></Box>
<Box className='image2'><Text3 >Russia </Text3></Box>
<Box className='image3'><Text3 >Bali </Text3></Box>
<Box className='image4'><Text3 >Dubai </Text3></Box>


    </div>

  )
}
