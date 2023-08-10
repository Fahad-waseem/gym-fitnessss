import React from 'react'
import {Box ,Stack,Typography} from "@mui/material" 
const HeroBanner = () => {
  return (
    <Box sx={{
      mt: {lg:'212px',xs:"70px"}
    ,ml:{sm:'50px'}


    
    }}position="relative" p='20px'>  
        <Typography color="#FF2625" font-weight="600" fontSize='24px'>
                Fitness Club
        </Typography>
        <Typography >
          Sweat Small <br/> and Repeat
        </Typography>
        <Typography >
         Check out the most effective exercise
        </Typography>
    </Box>
  )
}

export default HeroBanner