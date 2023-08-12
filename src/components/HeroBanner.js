import React from 'react'
import {Box ,Button,Stack,Typography} from "@mui/material" ;
import HeroBannerImage from '../assets/images/banner.png' ;
const HeroBanner = () => {
  return (
    <Box sx={{
      mt: {lg:'212px',xs:"70px"}
    ,ml:{sm:'50px'}


    
    }}position="relative" p='20px'>  
        <Typography color="#FF2625" font-weight="600" fontSize='24px'>
                Fitness Club
        </Typography>
        <Typography fontWeight={700} 
        sx={{fontSize:{lg:'44px',xs:"40px"}}}
        mb='23px' mt='30px'
        >
          Sweat Small <br/> and Repeat
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' mb={4}>
         Check out the most effective exercise
        </Typography>
        <Button variant="contained" color='error' href='#exercise'
        sx={{backgroundColor:'#ff2625'}} padding='10px'
        >
          Explore Exercise</Button>
        <Typography fontWeight={600}
        color='#ff26225' fontSize='200px'marginTop='35px'  sx={{
          opacity: 0.1,
          display:{lg:'block',xs:'none',}
        }}
        >
          Exercise
        </Typography>
        <img src={HeroBannerImage} alt='hero-image' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner