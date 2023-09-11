import styled from '@emotion/styled'
import { Typography,Box } from '@mui/material'
import React from 'react'
import Places from './Places'

const Text1 = styled(Typography)`
font-size:1.5rem;
color:black;
margin-left:1rem;
font-weight:500;
text-align:start;
margin-top:1rem;
font-family:cursive;
border-bottom:.2rem solid gray;
`

export default function Gallery() {
  return (
   <Box style={{height:"30rem",marginTop:'1rem',background:"cornSilk",width:'100vw'}}>
    <Text1>
        Popular <br /> Destinations
    </Text1>
    <Box style={{display:'flex'}}>
<Places />
    </Box>
   </Box>
  )
}
