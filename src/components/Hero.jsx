import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'


const Section= styled.div`
height:100vh;
scroll-snap-align:center;
display:flex;
flex-direction:column

`
const Container=styled.div`
height:100vh;
scroll-snap-align:center;
`

const Hero = () => {
  return (
    <Section>
        <Navbar/>
        <Container> Hero</Container>


      
    </Section>
  )
}

export default Hero
