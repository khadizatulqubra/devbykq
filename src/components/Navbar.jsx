import React from 'react'
import styled from 'styled-components'
import { HiOutlineCursorClick } from "react-icons/hi";


const Section= styled.div`
display:flex;
justify-content:center;

`;

const Container= styled.div`
width: 1400px;
display:flex;
justify-content:space-between;
align-items:center;
padding:10px 0px;

`;

const Links= styled.div`
display:flex;
align-items:center;
gap:50px;
`;

const Icons= styled.div`
display:flex;
align-items:center;
gap:20px;

`;

const Logo= styled.img`
 max-height: 20vh; 
  max-width: 10vw;
 filter:drop-shadow(0 0 20px #ece1f0);
 cursor: pointer;



`;

const List= styled.ul`
display:flex;
gap:20px;
list-style:none;
cursor: pointer;
`;

const ListItem= styled.li``
const Button= styled.button`
width:100px;
padding:10px;
background-color: #da43af;
color:white;
border:none;
border-radius:5px;
cursor: pointer;


`



const Navbar = () => {
  return (
  
    <Section>
        <Container>
            <Links>
            <Logo src ="./img/KQ.png"/>
            <List>
                <ListItem> Home</ListItem>
                <ListItem> About Me</ListItem>
                <ListItem> Works</ListItem>
                <ListItem> Contact</ListItem>
            </List>
            </Links>
            <Icons>
           <Button>Lets Discuss</Button>
           <HiOutlineCursorClick style={{ fontSize: '30px', color: ' #da43af', }} />

            </Icons>
        </Container>
    </Section>
  )
}

export default Navbar