import React, { useEffect, useState } from 'react'
import "../../App.css"
import { Typography,Box,Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { Bookings } from '../../axios/Routes'
import styled from '@emotion/styled'


const Box2 =styled(Box)`
display:flex;
flex-direction:column;
row-gap:1rem;
height:12rem;
width:60.5rem;
background-color: rgba(240, 248, 255, 0.152);
border:.1rem solid black;
margin:3rem 1rem;
border-radius:1rem;
@media (max-width:426px){
width:95vw;
height:40vh;
}

`
const Text = styled(Typography)`
display:flex;
margin:.3rem 17rem;
text-align:center;
color:black;
font-size:1.2rem;
font-weight:700;
`
const Box1 =styled(Box)`

display:flex;
margin:0rem 3rem;
column-gap:30rem;

@media(max-width:426px){
column-gap:10rem;
}

`
const Text2 =styled(Typography)`
display :flex;
font-size:.9rem;
color:blue;
font-weight:700;
font-family:cursive;

`

export default function () {
   const [book,setBook] =useState([])
    const user =localStorage.getItem('user')


    useEffect(()=>{

        const  bookings = async()=>{
            const book = await  Bookings(user);
            setBook(book.data);
            console.log(book);
            

        }

 bookings();
    },[user])
 


  return (
    <div className='bookingCoin'>
    <Button style={{margin:'1rem 55rem'}} variant='contained' color='error'>Home</Button>
    {book.map((books,index)=>(
    <Box2 key={index}>
    <Box1>
      <Text style={{display:'flex'}}>{books.user}</Text>
    </Box1>
    <Box1>
        <Text2>Location : {books.place}</Text2>
        <Text2> From : INDIA</Text2>
    </Box1>
    <Box1>
        <Text2>Check In : {books.checkIn}</Text2>
        <Text2>checkOut :{books.checkOut}</Text2>
    </Box1>
    <Box1>
        <Text2>Travellers:{books.travellers}</Text2>
     <Button style={{marginLeft:"3rem"}} color='success' variant='contained' >EDIT</Button>
    </Box1>
</Box2>
))}
    </div>
  )
}
