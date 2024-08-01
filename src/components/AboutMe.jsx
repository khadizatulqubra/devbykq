import React from 'react'
import styled from 'styled-components'


const Section= styled.div`
height:100vh;
scroll-snap-align:center;
display:flex;
align-items:center;
justify-content:center;

`;
const Container=styled.div`
height:100vh;
scroll-snap-align:center;
width:1400px;
display:flex;
justify-content:space-between;
`;

const Left=styled.div`
flex:1;

`;

const Right=styled.div`
flex:1;
display:flex;
flex-direction:column;
justify-content:center;
gap:20px;
`;


const Title=styled.h1`
font-size:74px;
`;
const WhatWeDo=styled.div`
display:flex;
align-items:center;
gap:10px;


`;
const Line=styled.img`
height:5px;


`;
const Subtitle=styled.h2`

`;
const Desc=styled.p`
font-size:24px;
color:lightgray;

`;

const Button=styled.button`
background-color:#da4ea2;
color:white;
font-weight:500px;
width:100px;
padding:10px;
border:none;
border-radius:5px;
cursor: pointer;


`;






const AboutMe = () => {
  return (
    <Section>
        <Container> 
            <Left>
               
            </Left>
            <Right>
            <Title>Expand Your Horizons </Title>
                <WhatWeDo>
                    <Line src='./img/line.png'/>
                    <Subtitle>About Me </Subtitle>
                </WhatWeDo>
                <Desc>I enjoy creating delightful.human </Desc>
                <Button>Learn More</Button>
            </Right>
            
        </Container>


      
    </Section>
  )
}

export default AboutMe
