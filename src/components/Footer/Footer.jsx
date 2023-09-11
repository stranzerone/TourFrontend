import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { TableFooter } from '@mui/material';
import {Box} from '@mui/material';
export default function Footer() {
  return (
    <div>
       <Box style={{display:'flex',height:'7vh',justifyContent:'center', alignItems:'center',gap:'1rem',background:'gray'}}>
        
            <InstagramIcon /><a href='https://www.google.com'>Instagram</a>
            <GitHubIcon /><a href='https://github.com/stranzerone?tab=repositories'> My Github</a>
             <AlternateEmailIcon /><a>sahilmulanioneplus@gmail.com</a>
        
       </Box>
    </div>
  )
}
