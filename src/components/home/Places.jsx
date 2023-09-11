import React from 'react'
import { Box, Typography } from '@mui/material'
import { Tourist } from '../../data/Tourist'
import styled from '@emotion/styled'
import 'react-multi-carousel/lib/styles.css';
import Image1 from "../../Images/ship.jpeg"
import Carousel from "react-multi-carousel"
const Box1 = styled(Box)`
height:22rem;
width:15rem;
margin-left:1rem;
box-shadow:.3rem .4rem .5rem .3rem gray;
border-radius:.6rem;
margin-top:1rem;

`
export default function () {

    const filter = Tourist.filter(data => [ 3, 5, 7, 9].includes(data.id));

    const responsive = {desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  

  return (
   <Box   width={'100vw'}>
    <Carousel
       
       responsive={responsive}
       swipeable={false}
      draggable={false}
      dotListClass="custom-dot-list-style"
      containerClass="carousel-container"
      centerMode={true}
      autoPlay={true}
      keyBoardControl={true}
      autoPlaySpeed={3000}
      infinite={true} >
   {Tourist.map((data)=>(
   <Box1 key={data.id}>
<img  src={data.image} alt='auto' width={'100%'} height={'50%'} />
<Box style={{display:'flex',gap:'5rem',marginLeft:".6rem",}}>
<Typography style={{color:'blue', fontSize:'1rem',fontFamily:'cursive'}}>{data.visits} visits</Typography>
<Typography style={{color:'orange',fontSize:'.9rem',fontFamily:'cursive'}}>{data.rating} rating</Typography>
</Box>
<Box>
<Typography style={{textAlign:'center',color:'black',fontSize:"1.2rem",fontFamily:'cursive'}}>{data.country}</Typography>
</Box>
<p>Loream jnflanf nglakmfp ngoienf ngoie g nviae  ncenoa n nei v ie r noianf</p>
  </Box1>
))}
</Carousel>

   </Box>
  )
}
