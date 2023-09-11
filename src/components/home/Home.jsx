import React from 'react'
import Navbar from './Navbar'
import Image1 from "../../Images/ship.jpeg"
import { Box,Divider,Typography } from '@mui/material'
import styled from '@emotion/styled'
import "./Home.css"
import SearchBar from './SearchBar'
import Midsection from './Midsection'
import Destinations from './Destinations'
import MainGallery from '../gallery/MainGallery'
import Feeds from './Feeds'
import Footer from '../Footer/Footer'

const Box1 =styled(Box)`
background-image:Image1;
`
const Text1=styled(Typography)`
font-size:2rem;
margin-top:1rem;
color:white;
font-weight:700;
@media(max-width:427px){
  font-size:1.8rem;
}
`
export default function Home() {
const user =localStorage.getItem('user');
  return (
    <div style={{position:'absolute'}}>
    <div className='HomeCoin'>
<div className='Head'>
<Navbar />
<Box style={{display:'flex',justifyContent:'center',width:'100vw'}}>
<Box style={{display:'flex',flexDirection:'column',textAlign:'center',margintTop:"4rem"}}>
    <Text1>Lets Plan Your Destination</Text1>

    <Text1>You Are The One Decide Your Distination
    <br />{user?<Text1>"{user}"</Text1>:<Text1>"Please Login First "</Text1>    } </Text1>
    
    <SearchBar />
</Box> 
  </Box>
 
</div>
<Box>
    <Midsection />
</Box>
<Box>
    <Destinations />
</Box>
<Box>
<Typography style={{fontFamily:'cursive',fontSize:'1.7rem',margin:'1rem 1rem'}}>Gallery</Typography>
    <MainGallery />
</Box>
<Box>
  <Feeds />
</Box>
<Box>
  <Footer />
</Box>

</div>
    </div>
  )
}
