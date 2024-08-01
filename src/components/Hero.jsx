import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'


const Section= styled.div`
height:100vh;
scroll-snap-align:center;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;

`;
const Container=styled.div`
height:100vh;
scroll-snap-align:center;
width:1400px;
display:flex;
justify-content:space-between;
`;

const Left=styled.div`
flex:2;
display:flex;
flex-direction:column;
justify-content:center;
gap:20px;
`;

const Right=styled.div`
flex:2;
position:relative;
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
const Img=styled.img`
width:500px;
height: 500px;
object-fit:contain;
position:absolute;
top:0;
bottom:0;
left:0;
right:0;
margin:auto;
animation:animate 2s infinite ease alternate;

@keyframes animate {
    to{
        transform:translateY(30px)
    }
    
}


`;





const Hero = () => {
  return (
    <Section>
        <Navbar/>
        <Container> 
            <Left>
                <Title>Think. Make. Solve</Title>
                <WhatWeDo>
                    <Line src='./img/line.png'/>
                    <Subtitle>What I do </Subtitle>
                </WhatWeDo>
                <Desc>I enjoy creating delightful.human </Desc>
                <Button>Learn More</Button>
            </Left>
            <Right>
                <Img src="./img/p4.PNG" alt="" />
            </Right>
            
        </Container>


      
    </Section>
  )
}

export default Hero
