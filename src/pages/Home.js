import React,{useState} from 'react'
import {Box} from '@mui/material'
import Exercise from '../components/Exercise';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  return (
    <Box>
        <HeroBanner/>
        {/* <SearchExercises/> */}
        <SearchExercises/>
        <Exercise/>

    </Box>
  )
}

export default Home