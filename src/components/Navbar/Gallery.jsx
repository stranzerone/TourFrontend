import React from 'react'
import '../../App.css'
import { Tourist } from '../../data/Tourist'
import { Box, Typography } from '@mui/material'
import ship from "../../Images/ship.jpeg"

export default function Gallery() {
  return (
    <div className='destCoin'>
    <Typography style={{color:'black',fontWeight:'700', fontFamily:'cursive',marginLeft:'1rem',borderBottom:'.3rem solid black',marginTop:'1rem'}}>GALLERY FROM OR TRAVELL BUDDIES</Typography>
    <Box className='desBox'>
    <Box className='item1' >
    <img src={Tourist[0].image} alt='auto' style={{height:'14rem',width:'30vw'}}/>

    </Box>
    <Box className='item2'>
    <img src={Tourist[1].image} alt='auto' style={{height:'14rem',width:'70vw'}}/>

    </Box>
    <Box className='item3'>
    <img src={Tourist[2].image} alt='auto' style={{height:'14rem',width:'70vw'}}/>

    </Box>
    <Box className='item4'>
    <img src={Tourist[3].image} alt='auto' style={{height:'14rem',width:'30vw'}}/>

    </Box>
    </Box>




    <Box className='desBox'>
    <Box className='item1' >
    <img src={Tourist[5].image} alt='auto' style={{height:'14rem',width:'30vw'}}/>

    </Box>
    <Box className='item2'>
    <img src={Tourist[6].image} alt='auto' style={{height:'14rem',width:'70vw'}}/>

    </Box>
    <Box className='item3'>
    <img src={Tourist[7].image} alt='auto' style={{height:'14rem',width:'70vw'}}/>

    </Box>
    <Box className='item4'>
    <img src={Tourist[8].image} alt='auto' style={{height:'14rem',width:'30vw'}}/>

    </Box>
    </Box>


    <Box className='desBox'>
    <Box className='item1' >
    <img src={Tourist[9].image} alt='auto' style={{height:'14rem',width:'30vw'}}/>

    </Box>
    <Box className='item2'>
    <img src={Tourist[1].image} alt='auto' style={{height:'14rem',width:'70vw'}}/>

    </Box>
    <Box className='item3'>
    <img src={Tourist[2].image} alt='auto' style={{height:'14rem',width:'70vw'}}/>

    </Box>
    <Box className='item4'>
    <img src={Tourist[3].image} alt='auto' style={{height:'14rem',width:'30vw'}}/>

    </Box>
    </Box>


    <Box className='desBox'>
    <Box className='item1' >
    <img src={Tourist[0].image} alt='auto' style={{height:'14rem',width:'30vw'}}/>

    </Box>
    <Box className='item2'>
    <img src={Tourist[1].image} alt='auto' style={{height:'14rem',width:'70vw'}}/>

    </Box>
    <Box className='item3'>
    <img src={Tourist[2].image} alt='auto' style={{height:'14rem',width:'70vw'}}/>

    </Box>
    <Box className='item4'>
    <img src={Tourist[3].image} alt='auto' style={{height:'14rem',width:'30vw'}}/>

    </Box>
    </Box>


    <Box className='desBox'>
    <Box className='item1' >
    <img src={Tourist[0].image} alt='auto' style={{height:'14rem',width:'30vw'}}/>

    </Box>
    <Box className='item2'>
    <img src={Tourist[1].image} alt='auto' style={{height:'14rem',width:'70vw'}}/>

    </Box>
    <Box className='item3'>
    <img src={Tourist[2].image} alt='auto' style={{height:'14rem',width:'70vw'}}/>

    </Box>
    <Box className='item4'>
    <img src={Tourist[3].image} alt='auto' style={{height:'14rem',width:'30vw'}}/>

    </Box>
    </Box>
  
    </div>
  )
}
